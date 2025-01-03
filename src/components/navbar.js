import React from "react";
import { Link } from "react-router-dom";  // นำเข้า Link จาก react-router-dom

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-fluid" style={{ position: 'relative' }}>
                {/* ใส่รูปภาพพื้นหลัง */}
                <img 
                    src="https://www.khumphucome.com/assets/uploads/picture/2019-10-24-11-17-57-5e6e2.jpeg"
                    alt="bg"
                    style={{
                        width: '100%',        // ให้รูปภาพเต็มความกว้าง
                        height: '500px',      // กำหนดความสูง
                        objectFit: 'cover',   // ครอบพื้นที่โดยไม่บิดเบี้ยว
                        objectPosition: 'bottom', // ตัดภาพจากด้านบน
                        margin: '0px'         // ไม่มีระยะห่างรอบๆ รูปภาพ
                    }}
                />


                
                {/* โลโก้ที่ซ้อนอยู่ตรงกลาง */}
                <Link className="navbar-brand" to="/my-app" style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIp98SO9ngJ-xbjYvVA9Ot5Q_53X_omj2BA&s"  // ใส่ URL ของรูปภาพโลโก้ที่ต้องการใช้
                        alt="logo"
                        style={{
                            width: '150px',        // ขนาดของโลโก้
                            height: '150px',       // ขนาดสูงของโลโก้
                            borderRadius: '50%',   // ทำให้รูปเป็นวงกลม
                            objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                        }}  
                    />
                </Link>
                
                {/* ปุ่ม View Room อยู่ใต้โลโก้ */}
                <div style={{
                    position: 'absolute', 
                    top: '70%', // ปรับตำแหน่งของปุ่มให้ห่างจากโลโก้
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '20px' // เพิ่มระยะห่างระหว่างโลโก้กับปุ่ม
                }}>
                    <Link to="/standard" 
                        className="btn mt-5"
                        style={{ 
                            backgroundColor: '#E89700',  // สีเหลืองทอง
                            color: 'white',               // ข้อความในปุ่มเป็นสีขาว
                            padding: '20px 30px',         // ขนาดของปุ่ม
                            fontSize: '20px',             // ขนาดตัวอักษร
                            border: 'none',               // ไม่มีขอบ
                            borderRadius: '50px'          // มุมปุ่มโค้ง
                        }}
                    >
                        View Room
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
