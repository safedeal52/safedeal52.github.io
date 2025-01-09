// 페이지 전환(단순히 섹션 show/hide)
function showPage(pageId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
    if (section.id === pageId) {
      section.classList.add('active');
    }
  });
}

// 초기 로드시 HOME 페이지 보여주기
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});

// 분쟁 접수 처리 예시
function submitDispute() {
  const disputeType = document.getElementById('disputeType').value;
  const amount = document.getElementById('amount').value;
  const otherParty = document.getElementById('otherParty').value;
  const detail = document.getElementById('detail').value;

  // 간단 검증
  if (!disputeType || !amount || !otherParty || !detail) {
    alert('모든 항목을 입력해주세요!');
    return;
  }

  // 여기서 실제 백엔드에 AJAX/Fetch로 데이터 전송할 수 있음
  alert(
    `분쟁접수 완료!\n유형: ${disputeType}\n금액: ${amount}\n상대방: ${otherParty}\n내용: ${detail}`
  );

  // 다음 페이지(진행현황)로 이동
  showPage('status');
}
