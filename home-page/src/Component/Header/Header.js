import React from 'react';
import './Header.css'
const Header=()=>{
    return (
        <div className="bg-header">
            <div className="containner">
                <div className="logo_button">
                        <div className="logo-left">
                            videonly
                        </div>
                        <div className="btn-right">
                            <button className="login">LOGIN</button>
                            <button className="join">JOIN</button>
                        </div>
                </div>
                <div className="header_content">
                    <div className="text-big">
                        <div>비디온리는</div>
                        <div>오직 당신의 브랜드만를 위해 </div>
                        <div>템플릿을 만듭니다</div>
                    </div>
                     <div className="text-small">만의 브랜드를 위한 영상 템플릿을 직접 경험해보세</div>
                    <button className="btn-content">시작하기</button>
                        

                </div>
            </div>
        </div>
    );
}
export default Header;