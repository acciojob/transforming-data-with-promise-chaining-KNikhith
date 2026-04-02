//your JS code here. If required.
let output=document.getElementById("output");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	let input=Number(document.getElementById("ip").value);

	new Promise((res,rej)=>{
		setTimeout(()=>{
			output.textContent=`Result ${input}`;
			res(input);
		},2000);
	})
	.then((res,rej)=>{
		input *=2;
		setTimeout(()=>{
			output.textContent=`Result ${input}`;
			res(input);
		},2000);
	})
	.then((res,rej)=>{
		input -=2;
		setTimeout(()=>{
			output.textContent=`Result ${input}`;
			res(input);
		},1000);
	})
	.then((res,rej)=>{
		input /=2;
		setTimeout(()=>{
			output.textContent=`Result ${input}`;
			res(input);
		},1000);
	})
	.then((res,rej)=>{
		input +=10;
		setTimeout(()=>{
			output.textContent=`Final Result ${input}`
		},1000)
	})
	.catch((err)=>console.log(err));
})