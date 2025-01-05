import React from 'react';
import { Link } from 'react-router-dom';
const ContactPage = () => {
    return (
        
        <div className="container">
            
            <div className="container py-5 ">
                <Link to="/standard">
                <button
                    type="button"
                    className="btn btn-outline-warning2 ms-5 w-25"
                    >
                    Standard
                    </button>
                </Link>
                <Link to="/deluxe">
                    <button type="button" className="btn btn-outline-warning2 ms-5 w-25">Deluxe</button>
                </Link>
                <Link to="/suite">
                    <button type="button" className="btn btn-outline-warning2 ms-5 w-25">Suite</button>
                </Link>
            </div>  
            <nav class="navbar navbar-light bg-warning2 text-white">
                <div class="container-fluid d-flex justify-content-center">
                    <a class="navbar-brand text-white fw-bold">Standard</a>
                </div>
            </nav>

            {/* Standard Section */}
            <div className="mb-5 ">

                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img   style={{ width: '500px' }} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >ห้องมาตรฐาน</h5>
                                <p className="card-text text-start">ห้องพักในโรงแรมที่มีขนาดกะทัดรัดที่สุดโดยห้องประเภทนี้จะมีสิ่งอำนวยความสะดวกพื้นฐานที่จำเป็น เช่น เตียงนอน ห้องน้ำ ทีวี และเครื่องปรับอากาศ เหมาะสำหรับผู้เข้าพักที่เดินทางคนเดียว หรือมาเป็นคู่อีกทั้งยังสะดวกต่อการเข้าพักเพียงไม่กี่วันและต้อง การห้องพักในราคาประหยัด</p>
                                <p className="card-text text-start">🏢 20 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <Link to="/standard1"> <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p> </Link>
                                <Link
                                    to="/standardbuy1"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                >
                                    จองเลย!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
         </div>
    );
};

export default ContactPage;
