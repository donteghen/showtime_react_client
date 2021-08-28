
import {Row, Col, Avatar, Card} from 'antd';
import { SendOutlined,ExclamationCircleOutlined, ProfileOutlined,
  ContainerOutlined, EnvironmentOutlined, PhoneOutlined, CopyrightCircleOutlined, HeartFilled} from '@ant-design/icons'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const {Meta} = Card;
const video = {
  thumbnail :'https://i.ytimg.com/vi/Fnoal6EakrE/hq720.jpg?sqp=-%E2%80%A6AFwAcABBg==&rs=AOn4CLBow3Z6vSgICrzwSsctbLHfMps7Jw',
  game_date:'12/03/2021',
  title:'Real Maldrid Vs Leventer',
  likes:2
  }
function FooterContainer ({auth}) {
    return (
      <div style={{background:'#1f8ffb', color:'white', padding:'30px 10px'}}>
        <Row wrap>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 7, offset: 1 }}>
            <div style={{ color:'white', padding:'20px 0'}}>
              <div>
                <h1><Avatar size={50} style={{background:'transparent'}} icon={<ExclamationCircleOutlined />} />About</h1>
              </div>
              <div style={{textAlign:'left'}}>
                <p><Avatar style={{ marginRight:'1px',background:'transparent'}} icon={<EnvironmentOutlined />} />St palmier, edea camerron</p>
                <p><Avatar style={{paddingLeft:'0',marginRight:'1px',background:'transparent'}} icon={<PhoneOutlined/>} />+90 5364802141 </p>
                <p><Avatar style={{marginRight:'1px',background:'transparent'}} icon={<SendOutlined />} />donaldteghen@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24, offset: 0 }}lg={{ span: 7, offset: 1 }}>
            <div style={{ color:'white', padding:'20px 0'}}>
              <div>
                <h1><Avatar size={50} style={{background:'transparent'}} icon={<ProfileOutlined />} />Latest Games</h1>
              </div>
              <div>
              <Card
              hoverable
              style={{ width: '100%', }}
              cover={<img alt="thumbnail" style={{height:'200px'}} src={video.thumbnail} />}
            >
              <Meta title={video.title} description={video.game_date} />
            </Card>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24, offset: 0 }}lg={{ span: 7, offset: 1 }}>
            <div style={{ color:'white', padding:'20px 0'}}>
              <div>
               <h1><Avatar size={50} style={{background:'transparent'}} icon={<ProfileOutlined />} />Links</h1>
              </div>
              <div >
                <p><Link style={{textDecoration:'none', color:'white'}} to='/about'>About</Link></p>
                <p><Link style={{textDecoration:'none', color:'white'}} to='/contact'>Contact</Link></p>
                {auth && auth._id ? (<p><Link style={{textDecoration:'none', color:'white'}} to='/dashboard/settings'>Settings</Link></p> ):
                 <p><Link style={{textDecoration:'none', color:'white'}} to='/login'>Login</Link></p>}
                <p><Link style={{textDecoration:'none', color:'white'}} to='/socials'>Socials</Link></p>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{borderTop:'1px solid white', margin:'10px 2px', display:'flex', justifyContent:'space-between'}}>
          <span>Copyright<Avatar style={{background:'transparent', margin:'0', padding:'0'}}  icon={<CopyrightCircleOutlined />}/>2021 All right reserved</span>
          <span>Developed & maintained with <Avatar style={{background:'transparent', color:'red'}}  icon={<HeartFilled />} /> by Donald Teghen</span>
        </div>
      </div>
    )
  }
  const mapStateToProps = state => ({auth: state.auth})
  export default connect(mapStateToProps)(FooterContainer);
  