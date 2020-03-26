import $ from "jquery"

class TierAlert {
  show() {
    // console.log($('body'));
    $('body').append(`
      <div class="modal fade" id="tierAlert">
        <div class="modal-dialog" style="width: 400px">
          <div class="modal-content">
            <div class="modal-body">
            <div class="flexCenter">
              <img src="/image/tierList2.png" alt="tierList"/>
             </div> 
              <ul class="ulStyle1">
                <li>Q&A 답변은 열정학생부터 할 수 있습니다.</li>
                <li>문서를 작성하거나 Q&A 답변 하면 50 exp 씩 경험치를 <br/>얻을 수 있습니다.</li>
                <li>일정량 만큼 경험치가 쌓이면 레벨이 올라가면서 아이콘이 <br/> 바뀝니다.</li>
                <li>레벨이 높을수록 사이트 내 정보를 수정할 수 있는 권한이 늘어납니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>`
    );
    $('#tierAlert').modal();
    $('#tierAlert').on('hidden.bs.modal', function (e) {
      setTimeout(() => $('#tierAlert').remove(), 100);
    });
  }
}

const tierAlert = new TierAlert;

export default tierAlert;