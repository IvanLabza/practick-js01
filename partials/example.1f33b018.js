var velResult=document.getElementById("result"),inputFirst=document.getElementById("input1"),inputToo=document.getElementById("input2"),submitResult=document.getElementById("submit"),plusBtn=document.getElementById("plus"),minusBtn=document.getElementById("minus"),delBtn=document.getElementById("del"),mngBtn=document.getElementById("umnag"),action="+";function colorResult(t){velResult.style.color=t<0?"red":"green"}plusBtn.onclick=function(){action="+"},minusBtn.onclick=function(){action="-"},delBtn.onclick=function(){action="/"},mngBtn.onclick=function(){action="*"},submitResult.onclick=function(){if("+"===action)colorResult(velResult.textContent=Number(inputFirst.value)+Number(inputToo.value));else if("-"===action){colorResult(velResult.textContent=Number(inputFirst.value)-Number(inputToo.value))}else if("/"===action){colorResult(velResult.textContent=Number(inputFirst.value)/Number(inputToo.value))}else if("*"===action){colorResult(velResult.textContent=Number(inputFirst.value)*Number(inputToo.value))}};
//# sourceMappingURL=example.1f33b018.js.map
