import { Container, Grid, Typography, Button, useTheme, useMediaQuery, Card, CardContent } from '@material-ui/core'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyle from './style'
import './style.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CloseIcon from '@material-ui/icons/Close';
import _ from 'lodash'
import { Tabs } from "antd";
import { getAccoutInfo } from '../../redux/actions/authentication'
import { bookingTitketAction, setOfficeList } from '../../redux/actions/QuanLyPhongVeAction'
import { SET_TAB } from '../../redux/type/QuanLyCumRapType'
import { ThongTinDatVe } from '../../_core/modules/ThongTinDatVe'
import { BOOKING } from '../../redux/type/QuanLyPhongVeType'

const { TabPane } = Tabs;

function Checkout(props) {
    const classes = useStyle()
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

    const { detailOfficeMovie, danhSachGheDangDat } = useSelector(state => state.QuanLyPhongVeReducer)
    const { thongTinPhim, danhSachGhe } = detailOfficeMovie
    console.log(detailOfficeMovie)
    console.log("🚀 ~ file: index.js ~ line 27 ~ Checkout ~ console.log(detailOfficeMovie)", console.log(detailOfficeMovie))
    const handleBooking = () => {
        const thongTinDatVe = new ThongTinDatVe
        thongTinDatVe.maLichChieu = props.match.params.id;
        thongTinDatVe.danhSachVe = danhSachGheDangDat;
        console.log("🚀 ~ file: index.js ~ line 32 ~ handleBooking ~ console.log(danhSachGheDangDat)", console.log(danhSachGheDangDat))
        dispatch(bookingTitketAction(thongTinDatVe))
    }

   useEffect(()=>{
    dispatch(setOfficeList(props.match.params.id))
   },[])

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {
            const { gheDangDat } = classes
            const classGheVip = ghe.loaiGhe === "Vip" ? `${classes.gheVip}` : "";
            const classGheDaDat = ghe.daDat === true ? `${classes.gheDaDat}` : "";

            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(
                (gheDD) => gheDD.maGhe === ghe.maGhe
            );
            if (indexGheDD != -1) {
                classGheDangDat = `${gheDangDat}`;
            }

            return (
                <Fragment key={index} >
                    {isMobile ? <><button onClick={() => {
                        console.log(ghe)
                        dispatch({
                            type: BOOKING,
                            payload: ghe
                        })
                    }}

                        style={{ margin: "10px 3px", }} className={`${classes.ghe} ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.stt}</button>
                        {(index + 1) % 8 === 8 ? <br /> : ""}</> : <><button onClick={() => {
                            console.log(ghe)
                            dispatch({
                                type: BOOKING,
                                payload: ghe
                            })
                        }}
                            disabled={ghe.daDat}
                            className={`${classes.ghe} ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.daDat ? classGheDaDat != '' ? <PermIdentityIcon /> : <CloseIcon /> : ghe.stt}</button>
                        {(index + 1) % 16 === 16 ? <br /> : ""}</>}
                </Fragment>
            )
        })
    }
    return (

            <div maxWidth="lg" style={{ marginTop: 20 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <div className={classes.screen}>
                            <div className={classes.screen_top}></div>
                            <div className="trapezoid"><h5 className="pt-3">Screen in shows </h5></div>
                        </div>

                        <div className="seats">
                            <div className="seats-info">
                                <button className={classes.ghe} >00</button>
                                <Typography className="seats-info__name">Ghế chưa đặt</Typography>
                            </div>
                            <div className="seats-info">
                                <button className={`${classes.ghe} ${classes.gheDangDat}`} >00</button>
                                <Typography variant="body1">Ghế đang đặt</Typography>
                            </div>
                            <div className="seats-info">
                                <button className={`${classes.ghe} ${classes.gheVip}`} >00</button>
                                <Typography variant="body2">Ghế Vip</Typography>
                            </div>
                            <div className="seats-info">
                                <button className={`${classes.ghe} ${classes.gheDaDat}`}>00</button>
                                <Typography variant="body2">Ghế được đăt</Typography>
                            </div>
                            <div className="seats-info">
                                <button className={`${classes.ghe} ${classes.gheKhachDat}`}>00</button>
                                <Typography variant="body2">Ghế khách đang đặt</Typography>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>{renderSeats()}</div>

                    </Grid>
                    <Grid item md={4} xs={12} className="mb-5">
                        <div className={classes.content_booking_movie}>
                            <Typography align="center" className={classes.title} variant="h5">{thongTinPhim?.tenPhim}</Typography>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Ngày chiếu: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Cụm rạp: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.tenCumRap}</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Rạp: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.tenRap}</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Địa chỉ: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>{thongTinPhim?.diaChi.length > 31 ? <span>{thongTinPhim?.diaChi.slice(0, 31)}...</span> : <span>{thongTinPhim?.diaChi}</span>}</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Ghế chọn: </Typography>
                                <div>
                                    {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                                        return <span key={index} style={{ color: "green", fontWeight: 700, fontSize: 20, wordBreak: "break-word", marginRight: 5 }}>{gheDD.stt}</span>

                                    })}
                                </div>
                            </div>
                            <hr className={classes.contentBotton} />
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Email: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>phonglvh995@gmail.com</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Phone: </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>0123456789</Typography>
                            </div>
                            <div className={classes.content_overview}>
                                <Typography variant="body2" className={classes.content_overview_title}>Tổng tiền: {""} </Typography>
                                <Typography variant="body2" className={classes.content_overview_info}>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return (tongTien += ghe.giaVe)
                                }, 0)}</Typography>
                            </div>
                            <div className={classes.contentBotton}>
                            <Button onClick={handleBooking}  className={classes.content_booking} variant="contained">Đặt vé</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}


export default function CheckoutTab(props){
    const { tabActive } = useSelector(state => state.QuanLyPhongVeReducer)
    const dispatch = useDispatch()
    return <Container style={{marginTop:70}}>
        <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key)=>{
            dispatch({
                type:SET_TAB
            })
        }}>
            <TabPane tab="01. Chọn ghế & Thanh toán" key="1">
                    <Checkout {...props}/>
            </TabPane>
            <TabPane tab="02. Kết quả đặt vé" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </Container>
       
}

function KetQuaDatVe(props){
    const dispatch = useDispatch()
    const classes = useStyle()
    const { userInfo } = useSelector(state => state.QuanLyNguoiDungReducer)
    useEffect(()=>{
        dispatch(getAccoutInfo())
    },[])
    const renderTicketItem = function () {
        return userInfo.thongTinDatVe?.map((ticket, index) => {
            return (
                <Container key={index}>
                    <Card>
                        <CardContent>
                            <Typography>Tên phim: {ticket.tenPhim}</Typography>
                            <Typography>Ngay dat: {ticket.ngayDat}</Typography>
                            <div style={{display:"flex"}}>
                                <h6 className={classes.content_overview_title}> Ten ghe:</h6>
                                {ticket.danhSachGhe.map((sit, index) => {
                                    return (
                                        <>
                                                <span className="ml-2"> {sit.tenGhe}</span>
                                        </>
                                    )
                                })
                                }
                            </div>
                           
                        </CardContent>
                    </Card>
                    
                </Container>
         
            )
          
        })
    }
    return <Container>
        <Typography className="mb-3 mt-3" align="center" variant="h4"> Kết quả đặt vé</Typography>
        {renderTicketItem()}
    </Container>
}