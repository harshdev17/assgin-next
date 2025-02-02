import { NextResponse } from "next/server";
import { transporter } from "../nodemailer";
import { regEx } from "@/components/regEx";
import pool from "../mysql";
import { writeFile } from "fs";

export async function POST(req) {
   const db = await pool;
   const data = await req.formData();
   const fileArr = []
   var i = 0;
   const q = "INSERT INTO submit_work (name,email,message,phone,attachment) VALUES (?,?,?,?,?)";
   while(data.get(`file${i}`)!=null){
       fileArr.push(data.get(`file${i}`))
       i++;
   }

  try {
   const saveArr = []; 
  fileArr.forEach(async(item)=>{
      const byteData = await item.arrayBuffer();
      const buffer = Buffer.from(byteData);
      var fname = new Date().getTime()+item.name;
      const path = `./public/attachments/${fname}`;
      saveArr.push(fname)
      await writeFile(path,buffer,()=>{
          console.log("Done")
      });
  })
    if (
      data.get("name").length > 0 &&
      data.get("phone").length > 9 &&
    //   data.get("subject").length > 0 &&
    //   data.get("datetime").length > 0 &&
      regEx[0].emailRegex.test(data.get("email")) === true
    ) {
      const res = await db.query(q,[data.get("name"),data.get("email"),data.get("message"),data.get("phone"),saveArr.toString()])
      const info = {
        from: '"UK Assignment Help Online" <noreply@examhelp.online>',
        to: "harshgupta.calinfo@gmail.com",
        subject: `Request from ${data.get("name")} with Order Id : MAT-${res[0].insertId}`,
        html: `<table cellpadding="0" style="width:100%;">
        <tbody>
           <tr style="width:100%;clear:both">
              <td style="width:70%;display:block;clear:both">
                 <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;margin-bottom:30px;background-clip:padding-box;border-collapse:collapse;border-color:#dddddd;border-radius:0 0 3px 3px;border-style:solid solid none;border-width:0 1px 1px">
        <tbody>
           <tr>
              <td height="3" bgcolor="#d91212"></td>
           </tr>
           <tr style="height:100px">
           <td align="center"  bgcolor="#fff" Top-border-color="#0e1d66" height="30"><img src ="https://matlabassignmenthelp.com/images/logo.png"  height="70">
           </td>
           </tr>
           <tr>
              <td bgcolor="#F7F9F9">
                 <table style="width:100%;clear:both" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody>
                       <tr>
                          <td height="2px;"></td>
                       </tr>
                       <tr>
                          <td height="2px;"></td>
                       </tr>
                       <tr>
                          <td>
                             <table rules="all" style="border-color: #666;" cellpadding="12;" width="100%;">                             
                     
                             <tr>
                             <td style="color:#101010;font-size:16px;"><strong>Name:</strong> </td>
                             <td style="color:#101010;font-size:16px;">${data.get("name")}</td>
                          </tr>
                         
                          <tr>
                          <td style="color:#101010;font-size:16px;"><strong>E-mail:</strong> </td>
                          <td style="color:#101010;font-size:16px;">${data.get("email")}</td>
                       </tr>
                       <tr>
                       <td style="color:#101010;font-size:16px;"><strong>Phone:</strong> </td>
                       <td style="color:#101010;font-size:16px;"><a href='https://api.whatsapp.com/send?phone=${data.get("phone")}'>+${data.get("phone")}</a></td>
                    </tr>   
                                              
                    <tr>   
                          <td style="color:#101010;font-size:16px;"><strong>Message:</strong> </td>
                          <td style="color:#101010;font-size:16px;">${data.get("message")}</td>
                       </tr>  
                       <tr>   
                       <td style="color:#101010;font-size:16px;"><strong>Attachments:</strong> </td>
                       <td style="color:#101010;font-size:16px;">${saveArr.map((item)=>(
                        `<a href="https://matlabassignmenthelp.com/attach/${item}">${item}</a>`
                       ))}</td>
                    </tr>                
                    </tbody>
                 </table>
                 <br>
              </td>
           </tr>
           <tr>
              <td align="center" bgcolor="#c80101" height="50"><font face="Segoe UI,Trebuchet MS,Arial, Helvetica, sans-serif" color="#fff" style="font-size:13px"> &copy; ${new Date().getFullYear()}<b> MatlabAssignmentHelp</b> All rights reserved. </font></td>
           </tr>
        </tbody>
     </table>`,
      };
      await transporter.sendMail(info);
      const info2 = {
         from: '"Matlab Assignment Help" <noreply@examhelp.online>',
          //  to: "dhamija.piyush7@gmail.com, calinfo70@gmail.com,akshit.calinfo07@gmail.com",
         to: data.get("email"),
         subject: `Thank You ${data.get("name")} with Order Id : MAT-${res[0].insertId} for placing Order.`,
         html: `<div style="margin:0px;padding:0px;background:#f9f9f9;">
         <table cellpadding="0" style="width:700px;margin:auto;display:block; font-family: 'Lato', sans-serif;">
             <tbody>
                 <tr>
                     <td style="width:700px;display:block;clear:both">
                         <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"style=" box-shadow: 0px 0px 10px #cccccc54;margin-top:30px;margin-bottom:30px;background-clip:padding-box;border-collapse:collapse;border-radius:5px;">
                             <tbody>
                                 <tr style="height:80px;">
                                     <td style="width:100%; padding-left:22px;"><img src="https://matlabassignmenthelp.com/images/logo.png" height="30" ></td>
                                     
                                 </tr>
                                 <tr >
                                     <td style="background-color: #b6e7ff42;"> <span style="display: block;text-align:center;"><img src="https://www.calltutors.com/resources/drawable/png/order.png" height="245px"> </span>
                                       
                                     <p style="color: #f86a4c; text-align:center; font-size:20px; font-weight: 600;  margin-bottom: 14px;"> <span style="margin-top:-2px">Thank you for submitting your order!</span> </p>
                                     </td>
                                 </tr>
                                 <tr>
                                     <td bgcolor="#fff">
                                         <table style="width:640px;clear:both" border="0" align="center" cellpadding="0"cellspacing="0">
                                             <tbody>
                                                 <tr>
                                                     <td>
                                                         <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                             style="padding: 25px 5px 45px 5px;">
                                                             <tr>
                                                                 <td>
                                                                     <p style="padding-bottom:10px;">
                                                                         <span style="font-size:18px; font-weight: 600;">Dear ${data.get("name")}, <br></span></p>
                                                                 </td>
                                                             </tr>
                                                             <tr>
                                                                 <td height="10px" style="font-size:16px; line-height:26px;">
                                                                     <p style="margin:0px; color:#474747; font-family: 'Lato', sans-serif;">Thanks for sharing your requirements with us.</p>
                                                                     <p style="color:#474747;">We value your trust in us, and we will do our best to meet your service expectations. Our experts are evaluating your requirements and will get back to you soon.</p>
                                                                     <p style="color:#474747;"> Thanks again, for your enquiry. If you have any questions, please don't hesitate to call us or live chat with us on the website.</p>
                                                                     <p style="color:#474747;"> <b>Query </b>: MAT-${res[0].insertId} </p>
                                                                     <p style="color:807f7f; font-size:14px; margin-top: 30px;  font-weight: 600;">  Click here to <span style="cursor:pointer;"> <a href="https://tawk.to/chat/57a3391709042bb15bb9495c/default/?$_tawk_popout=true" style="text-decoration: none; color: #f86a4c"> chat now </a> </span>  with our moderator.</p>
                                                                 </td>
                                                             </tr>
                                                            <tr>
                                                                <td>
                                                                    <p style="line-height:26px;margin-top:25px;margin-bottom:0px; font-size:18px; font-weight: 600;"> Sincerely,</p>
                                                                    <p style="line-height:26px;margin-top:0px;font-size: 16px;">Service Team</p>
                                                                    <p style="line-height:22px;margin-top:22px;margin-bottom:0px; color:#474747;font-size: 12px;">
                                                                     &copy; Copyright 2022. All Rights Reserved.</p>
                                                                </td>
                                                            </tr>
                                                         </table>
                                                     </td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>
                     </td>
                 </tr>
             </tbody>
         </table>
     </div>`,
       }
       await transporter.sendMail(info2);
      return NextResponse.json({ message: "Mail sent Successfully" });
    } else {
      throw err;
    }
  } catch (err) {
    return NextResponse.json({  err });
  }
}
