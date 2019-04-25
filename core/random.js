const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function run(){
	const num = Math.ceil(Math.random()*35);
	return chars[num];
}

export default function(length = 5){
	let str = '';
	for(let i = 0; i<length; i++){
		str = str + run();
	};
	return str
}

