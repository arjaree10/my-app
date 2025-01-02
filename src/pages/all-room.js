import React from 'react';

const ContactPage = () => {
    return (
        <div className="container py-5">
            {/* Standard Section */}
            <div className="mb-5">
                <h3 className="bg-brown text-white p-3">Standard</h3>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start">ห้องมาตรฐาน</h5>
                                <p className="card-text text-start">ห้องพักในโรงแรมที่มีขนาดกะทัดรัดที่สุดโดยห้องประเภทนี้จะมีสิ่งอำนวยความสะดวกพื้นฐานที่จำเป็น เช่น เตียงนอน ห้องน้ำ ทีวี และเครื่องปรับอากาศ เหมาะสำหรับผู้เข้าพักที่เดินทางคนเดียว หรือมาเป็นคู่อีกทั้งยังสะดวกต่อการเข้าพักเพียงไม่กี่วันและต้อง การห้องพักในราคาประหยัด</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deluxe Section */}
            <div className="mb-5">
                <h3 className="bg-brown text-white p-3">Deluxe</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="card-img-top" alt="Deluxe Room 1" />
                            <div className="card-body">
                                <h5 className="card-title">ห้องดีลักซ์ 1</h5>
                                <p className="card-text">รายละเอียดของห้องดีลักซ์ เช่น เตียงคู่ และอ่างอาบน้ำ</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="card-img-top" alt="Deluxe Room 2" />
                            <div className="card-body">
                                <h5 className="card-title">ห้องดีลักซ์ 2</h5>
                                <p className="card-text">รายละเอียดของห้องดีลักซ์ เช่น ห้องน้ำในตัว และสิ่งอำนวยความสะดวกเพิ่มเติม</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suite Section */}
            <div className="mb-5">
                <h3 className="bg-brown text-white p-3">Suite</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="card-img-top" alt="Suite Room 1" />
                            <div className="card-body">
                                <h5 className="card-title">ห้องสวีท 1</h5>
                                <p className="card-text">รายละเอียดของห้องสวีท พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="card-img-top" alt="Suite Room 2" />
                            <div className="card-body">
                                <h5 className="card-title">ห้องสวีท 2</h5>
                                <p className="card-text">ห้องพักสุดหรูหราที่มาพร้อมพื้นที่นั่งเล่น</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="card-img-top" alt="Suite Room 3" />
                            <div className="card-body">
                                <h5 className="card-title">ห้องสวีท 3</h5>
                                <p className="card-text">ห้องพักสุดพิเศษสำหรับการเข้าพักระยะยาว</p>
                                <p className="card-text"><small className="text-muted">www.example.com</small></p>
                                <a href="#" className="btn btn-primary">ดูรายละเอียด</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
