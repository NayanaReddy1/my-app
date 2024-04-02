import logo from '../images/images/pic/logo.png'


export function Navbar (){
    return (


<div class="navbar">
<img src={logo} class="logo"/>
<ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">ABOUT US</a></li>
    <li><a href="#">PORTFOLIO</a></li>
    <li><a href="#">CONTACT</a></li>
</ul>
</div>
    )
}