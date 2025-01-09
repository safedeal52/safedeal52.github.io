// 시세 조회(데모)
function showPriceResult(event) {
  event.preventDefault(); // 폼 제출 방지
  const resultDiv = document.getElementById('price-result');
  resultDiv.classList.remove('hidden');
  // 실제로는 서버/API 요청 후 결과를 가져와 표시해야 하지만 여기선 데모
  alert('시세 조회(데모) 완료!');
  return false;
}

// 분쟁 지원 모달 열기
function showDisputeForm() {
  document.getElementById('dispute-modal').classList.remove('hidden');
}

// 분쟁 지원 모달 닫기
function closeDisputeForm() {
  document.getElementById('dispute-modal').classList.add('hidden');
}

// 분쟁 신청 폼 제출(데모)
function submitDispute(event) {
  event.preventDefault();
  alert('결제 후 분쟁 신청이 접수되었습니다(데모).');
  // 폼 닫기
  closeDisputeForm();
  return false;
}
