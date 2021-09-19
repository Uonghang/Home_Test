import './Listting.css';
import sp2 from '../../assets/img/sp2.jpg'
import sp3 from '../../assets/img/sp3.jpg'
import sp4 from '../../assets/img/sp4.jpg'
import sp5 from '../../assets/img/sp5.jpg'
import sp1 from '../../assets/img/sp1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Listting = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '30px',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {

                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,

                }
            }, {
                breakpoint: 5576,
                settings: {

                    centerMode: true,
                    centerPadding: '40px',

                }
            },
        ]
    }
    return ( <
        div className = "Listting" >
        <
        div className = "containner" >
        <
        div className = "title-listting" >
        <
        div className = "title-left" > 기업들의 템플릿 제작 < /div> <
        div className = "more" > MORE < /div> <
        /div>

        <
        /div> <
        div className = "list-content" >
        <
        div >
        <
        Slider {...settings }
        className = "row" >
        <
        div >
        <
        img src = { sp1 }
        /> <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div> <
        /div> <
        div >
        <
        img src = { sp2 }
        /> <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div> <
        /div> <
        div >
        <
        img src = { sp3 }
        /> <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div> <
        /div> <
        div >
        <
        img src = { sp4 }
        />  <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div>   <
        /div> <
        div >
        <
        img src = { sp5 }
        /> <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div> <
        /div> <
        div >
        <
        img src = { sp2 }
        /> <
        div className = "cap-food" > 한낮 무더위 점심네뉴는 냉면이 최고! < /div> <
        /div> <
        /Slider>


        <
        /div> <
        /div> <
        /div>
    );
}
export default Listting;