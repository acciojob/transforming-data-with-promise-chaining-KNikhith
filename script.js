//your JS code here. If required.
let output=document.getElementById("output");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	let input=Number(document.getElementById("ip").value);

	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${input}`;
			resolve(input);
		},2000);
	})
	.then((val)=>{
		return new Promise((resolve,reject)=>{
			input *=2;
			setTimeout(()=>{
				output.textContent=`Result: ${input}`;
				resolve(input);
			},2000)
		})
	})
	.then((val)=>{
		return new Promise((resolve,reject)=>{
			input -=2;
			setTimeout(()=>{
				output.textContent=`Result: ${input}`;
				resolve(input);
			},1000)
		})
	})
	.then((val)=>{
		return new Promise((resolve,reject)=>{
			input /=2;
			setTimeout(()=>{
				output.textContent=`Result: ${input}`;
				resolve(input);
			},1000)
		})
	})
	.then((val)=>{
		return new Promise((resolve,reject)=>{
			input +=10;
			setTimeout(()=>{
				output.textContent=`Final Result: ${input}`;
				resolve(input);
			},1000)
		})
	})
	.catch((err)=>console.log(err));
})