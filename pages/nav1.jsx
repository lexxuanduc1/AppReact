import React from "react";
import './login.css';
export default function nav({islogin}){
    return <section>
        <ul className="nav">
            <li><a href=""><img style={{
                width:'25px',
                height:'25px'
            }} 
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/241193154/original/761d1a09e79de1829c4f3740f7686ae0c0f1f3fb/draw-you-a-cute-kawaii-chibi-style-anime-icon.png" 
            alt="" /></a></li>
            <li className="rightli" style={{display: islogin ? 'block' : 'none'}}><a href=""><img  className='avatar' src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-an-anime-girl-in-a-beautiful-pose-with-beautiful-flowers-image_2698613.jpg" alt="" />
            </a>
            <ul className="signoutmenu">
                    <li>
                        <a href="./" onClick={()=>{
                            localStorage.setItem('login', false);
                        }}>Sign out</a>
                    </li>
                </ul>
            </li>
            <li className="rightli" style={{display: islogin ? 'none' : 'block'}}><a href="/login">Login</a></li>
            <li className="rightli"><a href="">Search</a></li>
            
        </ul>
    </section>;
}