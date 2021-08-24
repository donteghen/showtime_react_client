import { Image, Avatar, Divider,Card,Badge, Button} from "antd";
import { connect } from "react-redux";
import * as actions from '../../redux/actions';
import styled from 'styled-components'
import {DeleteFilled, EditOutlined, HeartFilled, LikeFilled, UserOutlined} from '@ant-design/icons'
import Slider from "react-slick";
import { useState } from "react";
import EditUserModal from "../../shared/EditUserModal";

const {Meta} = Card;
const MuteSpan = styled.span`
  color:grey;
  font-style : italic;
  font-size: 12px;
  margin-bottom:0;
  padding-bottom:0;
`;
const InfoSpan = styled.span`
  color:#1f8ffb;
  font-weight : bold;
  font-size: 18px;
  margin-top:0;
  padding-top:0;
`;

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const video = {
    thumbnail :'https://i.ytimg.com/vi/Fnoal6EakrE/hq720.jpg?sqp=-%E2%80%A6AFwAcABBg==&rs=AOn4CLBow3Z6vSgICrzwSsctbLHfMps7Jw',
    game_date:'12/03/2021',
    title:'Real Maldrid Vs Leventer',
    likes:2
    }
function Settings ({auth, mobileView}) {
  const [edit, setEdit] = useState(false)
    return (
      <div >
      {<EditUserModal SetShow={setEdit} Show={edit} />}
        <div style={{display:'flex', flexDirection:`${mobileView ? 'column' : 'row'}`}}>
          <div style={{flex:`${mobileView ? '100%' : '30%'}`, textAlign:`${mobileView ? 'center': 'start'}`}}>
              {auth && auth.avatar ? <Avatar size={parseInt(`${mobileView ? 100 : 200}`)} src={<Image src={auth.avatar}/>} /> : 
              <Avatar size={parseInt(`${mobileView ? 100 : 200}`)} style={{ color: 'white', backgroundColor: '#1f8ffb' }} shape="square" icon={<UserOutlined />} />}
          </div>
          <div style={{flex:`${mobileView ? '100%' : '70%'}`, textAlign:`${mobileView ? 'center': 'start'}`}}>
              <h1 style={{fontSize:'24px'}}>Profile Information 
              <Button type='primary' shape='circle' color='#1f8ffb' onClick={() => setEdit(true)}
              icon={<EditOutlined color='#1f8ffb' />}/></h1>
              <div>
                <MuteSpan>Name</MuteSpan><br/>
                <InfoSpan>{auth?.name}</InfoSpan>
              </div>
              <div>
                <MuteSpan>Email</MuteSpan><br/>
                <InfoSpan>{auth?.email}</InfoSpan>
              </div>
              <div>
                <MuteSpan>Joined Date</MuteSpan><br/>
                <InfoSpan>{new Date(auth?.createdAt).toString().split(':')[0]}</InfoSpan>
              </div>
          </div>
          </div>
          <Divider style={{color:'#1f8ffb', marginTop:'50px'}} orientation="left" plain>Liked Videos</Divider>
          <div style={{padding:'0 20px'}}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => {
              return (
                <div key={num}>
                <Card hoverable size='small'
                style={{  margin:'0 10px', }}
                cover={
                <img
                    alt="thumbnail"
                    src={video.thumbnail}
                />
                }
                actions={[
                <LikeFilled key="like" />,
                <DeleteFilled key="delete" />,
                ]}
            >
                <Meta
                avatar={<Badge color='#1f8ffb' count={video.likes}><Avatar  style={{color:'red'}} icon={<HeartFilled />} /></Badge>}
                title={video.title}
                description={video.game_date}
                />
            </Card>
            </div>
              )}
            )
            }
        </Slider>
          </div>
          <Divider style={{color:'#1f8ffb', marginTop:'50px'}} orientation="left" plain>Watch Later</Divider>
          <div style={{padding:'0 20px'}}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => {
              return (
                <div key={num}>
                <Card hoverable size='small'
                style={{  margin:'0 10px', }}
                cover={
                <img
                    alt="thumbnail"
                    src={video.thumbnail}
                />
                }
                actions={[
                <LikeFilled key="like" />,
                <DeleteFilled key="delete" />,
                ]}
            >
                <Meta
                avatar={<Badge color='#1f8ffb' count={video.likes}><Avatar  style={{color:'red'}} icon={<HeartFilled />} /></Badge>}
                title={video.title}
                description={video.game_date}
                />
            </Card>
            </div>
              )
            })
            }
        </Slider>
          </div>
        </div>
    )
  }
  const mapStateToProps = state => ({auth:state.auth, mobileView:state.mobileView})
  export default connect(mapStateToProps, actions)(Settings);
  