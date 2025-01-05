import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate
import Swal from 'sweetalert2';  // เพิ่มการนำเข้า

const ContactPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate(); // เรียกใช้ useNavigate

    const handleBack = () => {
        // Handle the back action
    };

    const handleConfirm = () => {
        // แสดง SweetAlert2 และหลังจากนั้นเปลี่ยนเส้นทาง
        Swal.fire({
            title: 'ยืนยันการจอง',
            text: 'คุณต้องการยืนยันการจองนี้หรือไม่?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                // ถ้ากดยืนยัน ให้เปลี่ยนเส้นทางไปหน้า my-app
                navigate('/my-app'); // เปลี่ยนเส้นทางไปที่ '/my-app'
            }
        });
    };

    return (
        <div className="container py-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="mb-3 text-start">วันที่เช็คอินและเช็คเอาท์</h3>
                    <div className="d-flex align-items-center">
                        <input
                            type="date"
                            className="form-control me-2 w-25"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <span>ถึง</span>
                        <input
                            type="date"
                            className="form-control ms-2 w-25"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <div className="row mb-4 mt-4 text-start">
                        <div className="col-md-6">
                            <p><strong>จำนวนผู้เข้าพัก</strong></p>
                            <p>ผู้ใหญ่ 2 จำนวน 1 ห้อง</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img 
                                style={{ width: '500px', height: '200px', objectFit: 'cover' }} 
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" 
                                alt="Hotel Room"
                            />
                        </div>
                    </div>

                    <h3 className="mb-3">ข้อมูลลูกค้า</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">ชื่อ - นามสกุล ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ประเทศ</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ที่อยู่ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">เบอร์โทรลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">การชำระเงิน</label>
                                <select className="form-select" defaultValue="ธนาคารกรุงไทย">
                                    <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                                    <option value="ธนาคารไทยพาณิชย์">ธนาคารไทยพาณิชย์</option>
                                    <option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</option>
                                    <option value="ธนาคารกสิกรไทย">ธนาคารกสิกรไทย</option>
                                    <option value="ธนาคารกรุงศรีอยุธยา">ธนาคารกรุงศรีอยุธยา</option>
                                    <option value="ธนาคารออมสิน">ธนาคารออมสิน</option>
                                    <option value="ธนาคารทหารไทย">ธนาคารทหารไทย</option>
                                    <option value="ธนาคารธนชาต">ธนาคารธนชาต</option>
                                    <option value="ธนาคารเมืองไทย">ธนาคารเมืองไทย</option>
                                    <option value="ธนาคารยูโอบี">ธนาคารยูโอบี</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">เลขบัญชี</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ราคา</label>
                                <input type="text" className="form-control" value="700.00 บาท" disabled/>
                            </div>
                        </div>
                    </div>

                    <div className="text-end mt-4">
                        <Link to="/standard"><button className="btn btn-danger me-2" onClick={handleBack}>กลับ</button></Link >
                        <button className="btn btn-success" onClick={handleConfirm}>ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
