document.getElementById('start-fuzz').addEventListener('click', () => { 
const target = document.getElementById('fuzz-target').value.trim(); 
if (target) { 
// Simulating starting a fuzzing operation 
addOperation(target); 
document.getElementById('fuzz-target').value = ''; 
} 
}); 
function addOperation(target) { 
const operationList = document.getElementById('operation-list'); 
const newOperation = document.createElement('div'); 
newOperation.className = 'operation-item'; 
newOperation.innerHTML = ` 
<span>Fuzzing: ${target}</span> 
<button class="stop-btn">Stop</button> 
`; 
operationList.appendChild(newOperation); 
// Simulate stopping operation 
newOperation.querySelector('.stop-btn').addEventListener('click', () => { 
operationList.removeChild(newOperation); 
}); 
