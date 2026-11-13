export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const {choice,wish,message}=req.body||{};
 if(![choice,wish,message].every(v=>typeof v==='string'&&v.trim()&&v.length<=2000))return res.status(400).json({error:'Invalid input'});
 const token=process.env.TELEGRAM_BOT_TOKEN,chatId=process.env.TELEGRAM_CHAT_ID;
 if(!token||!chatId)return res.status(503).json({error:'Telegram belum dikonfigurasi'});
 const text=`💌 Confess untuk Gita\n\nPilihan: ${choice}\n\nHarapan:\n${wish}\n\nPesan:\n${message}`;
 try{const response=await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chatId,text})});if(!response.ok)throw Error('Telegram error');return res.status(200).json({ok:true})}catch{return res.status(502).json({error:'Pengiriman gagal'})}
}
