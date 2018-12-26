var app = new Vue({
	el: '#app',
	data: {
		message: ''
	}
});

/*
#Multiline text

<span>Multiline message is: </span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>


*/