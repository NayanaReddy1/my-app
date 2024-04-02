
export function Contact (){
    return(

        <div class="content-navbar">
            <h1>Contact me for <br/>Projects</h1>

            <form class="form" action="#" method="post"/>
                <div class="form-control">
                    <input type="text" name="username" placeholder="Username" />
                    <i class="fa-solid fa-user"></i>
            
                    <input type="email" name="email" placeholder="Email"/>
                    <i class="fa-solid fa-envelope"></i>
                
                    <input type="number"  name="Mobile" placeholder="Mobile Number"/>
                    <i class="fa-solid fa-phone-volume"></i>
                </div>
                <br/><br/><br/>

                <div class="form-control">
                    <input type="text" name="message" placeholder="Message"/>
                </div><br/>
                <button type="submit" class="btn">Send Message</button>
            <form/>
        </div>
        )
}