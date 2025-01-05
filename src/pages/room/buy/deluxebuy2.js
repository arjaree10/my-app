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
                                src="data:image/jpeg;base64,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" 
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
                                <input type="text" className="form-control" value="1500.00 บาท" disabled/>
                            </div>
                        </div>
                    </div>

                    <div className="text-end mt-4">
                        <Link to="/deluxe"><button className="btn btn-danger me-2" onClick={handleBack}>กลับ</button></Link >
                        <button className="btn btn-success" onClick={handleConfirm}>ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
