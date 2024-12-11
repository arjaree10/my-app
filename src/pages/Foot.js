import React from "react";

function Foot() {
    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                backgroundColor: "#E89700", // กำหนดสีพื้นหลัง
                textAlign: "left",           // จัดข้อความให้อยู่ทางซ้าย
                borderTop: "2px solid #ddd", // ขอบบนบาง ๆ เพื่อแยกส่วน
            }}
        >
            <h2>ติดต่อเรา</h2>
            <p><strong>Khum Phucome Hotel & Convention Hall</strong></p>
            <p>14/23 ถนนคลองชลประทาน ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50300 ประเทศไทย</p>
            <p>โทร: (66) 53 400 450 - 2</p>
            <p>อีเมล: <a href="mailto:info@khumphucome.com">info@khumphucome.com</a></p>
            <p>Facebook: <a href="https://www.facebook.com/Khumphucomehotel" target="_blank" rel="noopener noreferrer">Khumphucomehotel</a></p>
        </div>
    );
}

export default Foot;
