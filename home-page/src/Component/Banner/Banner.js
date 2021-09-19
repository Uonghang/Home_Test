import './Banner.css'
import icon1 from "../../assets/img/icon-1.jpg"
import icon2 from "../../assets/img/comment.png"
import icon3 from "../../assets/img/video-camera.png"
const Banner=()=>{
    return( 
        <div className="banner">
            <div className="title-banner">체험 가능한 템플릿</div>
            <div className="containner">
                <div className="row">
                <div className="col-4">
                    <div className="content">
                        <div><img src={icon1}/></div>
                        <div className="name">완료한 템플릿</div>
                        <div className="count">41</div>
                    </div>
                        
                </div>
                <div className="col-4">
                <div className="content">
                        <div><img src={icon2}/></div>
                        <div className="name">완료한 템플릿</div>
                        <div className="count">164</div>
                    </div>
                </div>
                <div className="col-4">
                <div className="content">
                        <div><img src={icon3}/></div>
                        <div className="name">사용중인 기업</div>
                        <div className="count">82</div>
                    </div>
                </div>  
                </div>
               
            </div>
            <div className="banner-end">
                <div className="text-content">
                나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!
                </div>
                <button className="btn-banner">시작하기 </button>

            </div>
            <div className="banner-footer">
                 <div className="content-banner">
                      <div className="content-top">팀원들과 함께 공유하며 작업하세요</div>
                      <div className="content-bot"> 
                            <div>받는 파일이 말썽이라면? 비디온리 하세요!</div>
                            <div>작업량이 많을 때, 마감으로 정신없을 때 바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!</div>
                      </div>
                      
                 </div>
            </div>
        </div>
        );
}
export default Banner;