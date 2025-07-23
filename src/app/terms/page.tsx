export default function TermsOfUse() {
  return (
    <div className="w-full py-12 px-8">
      <h1 className="text-3xl font-bold mb-4">ĐIỀU KHOẢN SỬ DỤNG - GhepXe</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Thông tin chúng tôi thu thập</h2>
      <p className="mb-2">Chúng tôi thu thập và xử lý các loại thông tin sau để phục vụ hoạt động dịch vụ:</p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
        <li><b>Thông tin cá nhân:</b> Họ tên, số điện thoại, email, địa chỉ liên lạc, hình ảnh CMND/CCCD, giấy phép lái xe (đối với tài xế), ảnh đại diện, ngày sinh.</li>
        <li><b>Thông tin định vị:</b> Dữ liệu GPS, vị trí hiện tại của thiết bị trong thời gian thực để ghép tài xế và khách hàng một cách tối ưu.</li>
        <li><b>Thông tin giao dịch:</b> Lịch sử đặt chuyến, địa điểm đi/đến, thời gian di chuyển, phương thức thanh toán, số tiền, mã khuyến mãi.</li>
        <li><b>Thông tin thiết bị:</b> Loại thiết bị (Android/iOS), hệ điều hành, độ phân giải màn hình, phiên bản ứng dụng, địa chỉ IP, cookie, mã định danh thiết bị (Device ID).</li>
        <li><b>Thông tin hỗ trợ khách hàng:</b> Nội dung trao đổi khi liên hệ bộ phận CSKH qua điện thoại, email hoặc ứng dụng.</li>
        <li><b>Thông tin từ bên thứ ba:</b> Nếu bạn đăng nhập qua tài khoản mạng xã hội (Google, Facebook), chúng tôi có thể thu thập một số thông tin từ các nền tảng đó với sự cho phép của bạn.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Mục đích sử dụng thông tin</h2>
      <p className="mb-2">Thông tin của bạn được sử dụng để đảm bảo chất lượng và an toàn dịch vụ:</p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
        <li>Ghép tài xế – hành khách nhanh chóng và chính xác dựa trên vị trí và nhu cầu.</li>
        <li>Xác minh danh tính để tăng độ tin cậy giữa các bên tham gia.</li>
        <li>Gửi thông báo về chuyến đi, thay đổi lịch trình, huỷ đơn, tình trạng giao dịch...</li>
        <li>Cá nhân hóa trải nghiệm người dùng: gợi ý tài xế, tuyến đường thường dùng, mức giá ưu đãi.</li>
        <li>Phân tích dữ liệu để cải tiến dịch vụ, tối ưu hệ thống, và tăng hiệu quả vận hành.</li>
        <li>Hỗ trợ kỹ thuật và xử lý sự cố nhanh chóng khi người dùng gặp vấn đề.</li>
        <li>Tuân thủ quy định pháp luật, bao gồm điều tra nội bộ hoặc hợp tác với cơ quan chức năng nếu có yêu cầu hợp lệ.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Bảo mật thông tin</h2>
      <p className="mb-2">GhepXe ưu tiên hàng đầu việc bảo vệ dữ liệu cá nhân của bạn bằng nhiều lớp bảo mật:</p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
        <li>Mã hóa dữ liệu khi lưu trữ và truyền tải thông tin.</li>
        <li>Giới hạn truy cập nội bộ chỉ dành cho nhân sự có thẩm quyền và được đào tạo về bảo mật.</li>
        <li>Tường lửa và phần mềm chống xâm nhập nhằm ngăn chặn truy cập trái phép.</li>
        <li>Sao lưu định kỳ và kiểm tra an ninh hệ thống thường xuyên để phát hiện và khắc phục lỗ hổng.</li>
        <li>Hợp tác với đối tác bảo mật uy tín để đảm bảo tiêu chuẩn an toàn dữ liệu.</li>
        <li>Thông báo sớm nếu xảy ra rò rỉ dữ liệu, và có biện pháp xử lý khẩn cấp.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Quyền của người dùng</h2>
      <p className="mb-2">Bạn hoàn toàn kiểm soát thông tin cá nhân của mình:</p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
        <li><b>Truy cập và chỉnh sửa thông tin:</b> Có thể xem và cập nhật thông tin qua tài khoản của bạn trên ứng dụng.</li>
        <li><b>Yêu cầu xóa thông tin:</b> Bạn có thể đề nghị xóa một phần hoặc toàn bộ thông tin cá nhân, trừ khi bị ràng buộc bởi pháp luật.</li>
        <li><b>Rút lại sự đồng ý:</b> Ngưng cho phép GhepXe thu thập và xử lý dữ liệu tại bất kỳ thời điểm nào, có thể ảnh hưởng đến việc sử dụng dịch vụ.</li>
        <li><b>Từ chối tiếp thị:</b> Bạn có thể chọn không nhận thông báo quảng cáo, ưu đãi qua email, SMS hoặc thông báo đẩy.</li>
        <li><b>Gửi khiếu nại:</b> Nếu bạn nghi ngờ quyền riêng tư bị xâm phạm, vui lòng liên hệ bộ phận hỗ trợ để được giải quyết.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Thời gian lưu trữ dữ liệu</h2>
      <p className="mb-2">Chúng tôi lưu trữ dữ liệu của bạn trong thời gian phù hợp để đảm bảo hoạt động dịch vụ và theo luật pháp:</p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
        <li><b>Trong thời gian sử dụng:</b> Mọi thông tin sẽ được lưu trữ để hỗ trợ tối ưu trải nghiệm.</li>
        <li><b>Sau khi ngừng sử dụng dịch vụ:</b>
          <ul className="list-disc pl-6 mt-1">
            <li>Dữ liệu cơ bản được lưu trữ tối đa 3 năm nhằm phục vụ mục đích thống kê, giải quyết tranh chấp hoặc theo yêu cầu pháp lý.</li>
            <li>Một số thông tin có thể được lưu lâu hơn nếu liên quan đến khiếu nại, tố tụng, hoặc điều tra.</li>
            <li>Yêu cầu xóa sớm: Bạn có thể yêu cầu xóa dữ liệu sớm hơn, trừ trường hợp pháp luật yêu cầu giữ lại.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
