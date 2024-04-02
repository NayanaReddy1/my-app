import image from '../images/images/pic/nayanar.png'

export function Profile (){
    return (

        <><div class="container">

            <div class="left">
                <div class="text">
                    <h1>Nayana<span class="line"></span></h1>
                    <h1 style={{ margintop: "-25px" }}>Reddy</h1><br /><br /><br />
                    <button class="button">HIRE ME!</button>
                </div>
            </div>




            <div class="center">
                <div class="image">
                    <img src={image} />
                </div>
            </div>


            <div class="right">
                <ul class="list">
                    <li class="brand">Branding</li>
                    <li>Digital Experience</li>
                    <li>Story Telling</li>
                    <li>UX writing</li>
                </ul>


                <div class="icons">
                    <i class="fa-brands fa-facebook" />
                    <i class="fa-brands fa-twitter" />
                    <i class="fa-brands fa-instagram" />
                </div>
            </div>
        </div><br /><br /><br/></>
            )
        }
