<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 border border-black" id="outer-contactform">
                <div class="contact-form m-4">
                    <form action="https://formspree.io/f/xqkorzdj" method="POST" id="form">
                    <label>Your Name: </label>
                    <input type="text" name="name" required>
                    <label>Your Email: </label>
                    <input type="email" name="email" required>
                    <label>Your Message:</label>
                    <textarea name="message" required></textarea><br>
                    <button id="button-submit" type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div class="col-6 border border-black text-white" id="map-section">
                <br><br>
                <div id="map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4939012697437!2d18.45897129999999!3d-33.9284229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5de845f8b0f5%3A0xa7db30ce14a10d6d!2sHEARTY%20Collective!5e0!3m2!1sen!2sza!4v1686563874089!5m2!1sen!2sza"
                    width="100%" height="100%" style="border:0; border-radius: 20px;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div><br>
                <strong>EMAIL: sonderwear@casuals.com</strong><br>
                <strong>ADDRESS: 123 Hearty Collective. Cape Town</strong><br>
                <strong>CELL NUMBER: 021 345 6578</strong>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.contact-form{
    padding: 10px;
    height: 80%;
    border: 2px solid black;
    border-radius: 50px;
    background-color: #FFD230;

}

#outer-contactform{
    background-color: #FFEEB3;
    height: 500px;
}

#form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

input{
    border: solid;
    border-radius: 20px;
    padding: 2%;
    width: 80%;
}

textarea{
    border: solid;
    border-radius: 20px;
    padding: 2%;
    width: 80%;
    height: 100% !important;
}

#button-submit{
    border: solid;
    padding: 5px;
    border-radius: 12px;
}

#map-section{
    background-color: #FFD230;
}

#map{
    border: 2px solid white;
    border-radius: 20px;
    height: 40%;
}
    
</style>