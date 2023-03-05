import { SSystem } from "./style";
import { Container } from "styled-bootstrap-grid";

import main from "src/assets/image/system/main.gif";
import main_server from "src/assets/image/system/main_server.gif";
import server_layer from "src/assets/image/system/server_layer.gif";
import server_arrow from "src/assets/image/system/server_arrow.gif";
import client from "src/assets/image/system/client.gif";
import client_point1 from "src/assets/image/system/client_point1.gif";
import client_point2 from "src/assets/image/system/client_point2.gif";
import client_point3 from "src/assets/image/system/client_point3.gif";
import layer1 from "src/assets/image/system/layer1.gif";
import layer2 from "src/assets/image/system/layer2.gif";
import layer3 from "src/assets/image/system/layer3.gif";
import layer4 from "src/assets/image/system/layer4.gif";
import system_arrow from "src/assets/image/system/system_arrow.gif";
import Image from "next/image";

export default function System() {
  return (
    <SSystem>
      <div className="section-system">
        <Container>
          <div className="module module-system">
            <div className="module-header">
              <h2 className="title">Hệ thống cấu thành</h2>
            </div>

            <div className="module-content">
              <div className="system-content">
                <div className="system-img">
                  <Image src={main} alt="main" />
                  <div className="system-run">
                    <span className="run1 run"></span>
                    <span className="run1-1 run"></span>
                    <span className="run2 run"></span>
                    <span className="run2-1 run"></span>
                    <span className="run3 run"></span>
                    <span className="run4 run"></span>
                  </div>
                  <div className="layer-server layer-show">
                    <Image src={main_server} alt="" />
                    <span className="server__top">
                      <Image src={server_layer} alt="" />
                    </span>
                    <span className="server__arrow">
                      <Image src={server_arrow} alt="" />
                    </span>
                    <span className="layer__title">API SYSTEM</span>
                  </div>
                  <div className="layer1 layer layer-show">
                    <Image src={client} alt="" />
                    <span className="client__point client__point1">
                      <Image src={client_point1} alt="" />
                    </span>
                    <span className="client__point client__point2">
                      <Image src={client_point2} alt="" />
                    </span>
                    <span className="client__point client__point3">
                      <Image src={client_point3} alt="" />
                    </span>
                    <span className="layer__top">
                      <Image src={layer1} alt="" />
                    </span>
                    <span className="layer__title">
                      <span>KYC BLOCKCHAIN</span> SYSTEM
                    </span>
                  </div>
                  <div className="layer2 layer layer-show">
                    <Image src={client} alt="" />
                    <span className="client__point client__point1">
                      <Image src={client_point1} alt="" />
                    </span>
                    <span className="client__point client__point2">
                      <Image src={client_point2} alt="" />
                    </span>
                    <span className="client__point client__point3">
                      <Image src={client_point3} alt="" />
                    </span>
                    <span className="layer__top">
                      <Image src={layer2} alt="" />
                    </span>
                    <span className="layer__title">
                      <span>VSA BLOCKCHAIN SYSTEM</span>
                    </span>
                  </div>
                  <div className="layer3 layer layer-show">
                    <Image src={client} alt="" />
                    <span className="client__point client__point1">
                      <Image src={client_point1} alt="" />
                    </span>
                    <span className="client__point client__point2">
                      <Image src={client_point2} alt="" />
                    </span>
                    <span className="client__point client__point3">
                      <Image src={client_point3} alt="" />
                    </span>
                    <span className="layer__top">
                      <Image src={layer3} alt="" />
                    </span>
                    <span className="layer__title">APP CLIENT</span>
                  </div>
                  <div className="layer4 layer layer-show">
                    <Image src={client} alt="" />
                    <span className="client__point client__point1">
                      <Image src={client_point1} alt="" />
                    </span>
                    <span className="client__point client__point2">
                      <Image src={client_point2} alt="" />
                    </span>
                    <span className="client__point client__point3">
                      <Image src={client_point3} alt="" />
                    </span>
                    <span className="layer__top">
                      <Image src={layer4} alt="" />
                    </span>
                    <span className="layer__title">WEBSITE CLIENT</span>
                  </div>
                </div>
              </div>

              <div className="system-text">
                <div className="system-item" id="system-vsa">
                  <div className="item-frame">
                    <span className="system__arrow">
                      <Image src={system_arrow} alt="" />
                    </span>
                    <div className="head">
                      <p className="title">VSA Blockchain System</p>
                    </div>
                    <div className="content">
                      <p className="desc">
                        Đây là hệ thống giúp hỗ trợ khởi tạo và lưu trữ các sự
                        kiện bình chọn, đánh giá; xử lý quá trình bình chọn của
                        người dùng; lưu trữ kết quả bình chọn đánh giá của người
                        dùng; lưu kết quả của các sự kiện bình chọn đánh giá.
                        <br />
                        Hạ tầng của hệ thống này cũng tương tự như hệ thống KYC
                        Blockchain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="system-item" id="system-kyc">
                  <span className="system__arrow">
                    <Image src={system_arrow} alt="" />
                  </span>
                  <div className="item-frame">
                    <div className="head">
                      <p className="title">
                        KYC BLOCKCHAIN <span>SYSTEM</span>
                      </p>
                    </div>
                    <div className="content">
                      <p className="desc">
                        Đây là hệ thống lưu trữ và xác minh thông tin người
                        dùng. Sau khi người dùng nhập thông tin, hệ thống này có
                        nhiệm vụ xác minh danh tính để từ đó phân quyền tương
                        tương ứng cho từng đối tượng khác nhau.
                        <br />
                        Hạ tầng của hệ thống này được cấu thành từ nhiều server.
                        Dữ liệu sẽ được phân tán và đồng bộ trên các server khác
                        nhau. Việc một server bị sập, hay bị tấn công dẫn đến
                        thay đổi dữ liệu cũng không khiến toàn bộ hệ thống bị
                        ảnh hưởng. Dữ liệu vẫn được bảo lưu và đồng thuận trên
                        các
                      </p>
                    </div>
                  </div>
                </div>
                <div className="system-item" id="system-web">
                  <div className="item-frame">
                    <span className="system__arrow">
                      <Image src={system_arrow} alt="" />
                    </span>
                    <div className="head">
                      <p className="title">WEBSITE CLIENT</p>
                    </div>
                    <div className="content">
                      <p className="desc">
                        Người dùng khi muốn theo dõi thông tin hoặc tham gia
                        bình chọn cho sự kiện đang được khởi tạo trên BVote đều
                        phải thao tác tại đây. Hệ thống này sau đó sẽ ghi nhận
                        thông tin và chuyển sang hệ thống tiếp theo.
                        <br />
                        Hệ thống này được lập trình trên ngôn ngữ Nodejs,
                        Html/css và các ngôn ngữ lập trình ứng dụng cho mobile.
                        erver của hệ thống này sẽ được thiết kế tách biệt các hệ
                        thống còn lại.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="system-item" id="system-app">
                  <div className="item-frame">
                    <span className="system__arrow">
                      <Image src={system_arrow} alt="" />
                    </span>
                    <div className="head">
                      <p className="title">APP CLIENT</p>
                    </div>
                    <div className="content">
                      <p className="desc">
                        Người dùng khi muốn theo dõi thông tin hoặc tham gia
                        bình chọn cho sự kiện đang được khởi tạo trên BVote đều
                        phải thao tác tại đây. Hệ thống này sau đó sẽ ghi nhận
                        thông tin và chuyển sang hệ thống tiếp theo.
                        <br />
                        Hệ thống này được lập trình trên ngôn ngữ Nodejs,
                        Html/css và các ngôn ngữ lập trình ứng dụng cho mobile.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="system-item" id="system-api">
                  <div className="item-frame">
                    <span className="system__arrow">
                      <Image src={system_arrow} alt="" />
                    </span>
                    <div className="head">
                      <p className="title">API System</p>
                    </div>
                    <div className="content">
                      <p className="desc">
                        đi qua các cổng được gọi là API. Mọi tấn công vào hệ
                        thống này chỉ khiến nó bị gián đoạn tạm thời dòng chảy
                        dữ liệu, các dữ liệu đã được lưu trữ hệ thống blockchain
                        không thể bị ảnh hưởng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SSystem>
  );
}
