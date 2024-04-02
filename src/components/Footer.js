
import pic1 from '../images/images/pic/nayanar.png'
import pic2 from '../images/images/pic/verified.png'

export function Footer (){
    return(

        <><div class="education">
            <h1 />Education & <h1 />
            <h1 />Awards<h1 />
            <div class="lines"></div>
            <div class="contents">

                <div class="years">
                    <h2 />2018<h2 />
                </div>
                <div class="years1">
                    <h2 />2019<h2 />
                </div>
                <div class="years1">
                    <h2 />2020<h2 />
                </div>
                <div class="dot"></div>
            </div>
        </div><div class="container1" style={{ height: "30%;" }}>
                <div class="box verified-w-h" style={{ height: "-10% !important" }}>
                    <img class=" photo" src={pic1} alt="" />
                    <div id="verified" style={{
                        position: "relative !important",
                        top: "-39% !important",
                        left: "0%",
                        marginbottom: "50% !important",
                        marginbottom: "50% !important",
                        marginTop: "-110px"
                    }}>

                        <img class="centered-image" style={{ width: "20%", height: "50%"}} src={pic2} alt="Image 1" />
                        <h3>Specialized in UX/UI</h3>
                        <h4>2018-19</h4>
                    </div>
                </div>
                <div class="box">
                    <i class="fa-regular fa-chess-knight"></i>
                    <h3>Designer of the Month</h3>
                    <h4>2018-19</h4>
                </div>
                <div class="box">
                    <i class="fa-solid fa-desktop"></i>
                    <h3>Post Graduation</h3>
                    <h4>2016-18</h4>
                </div>
                <div class="box">
                    <i class="fa-regular fa-keyboard"></i>
                    <h3>Design</h3>
                    <h4>2016-18</h4>
                </div>
            </div></>
                )
}