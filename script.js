document.addEventListener('DOMContentLoaded', function() {
    const ageSelect = document.getElementById('ageSelect');
    const enterBtn = document.getElementById('enterBtn');
    
    // 实时检测选择变化
    ageSelect.addEventListener('change', function() {
      enterBtn.disabled = !this.value;
    });
    
    // 点击事件处理
    enterBtn.addEventListener('click', function() {
      const age = ageSelect.value;
      const pages = {
        'child': 'child.html',
        'teen': 'teen.html',
        'adult': 'adult.html'
      };
      
      if (pages[age]) {
        window.location.href = pages[age];
      } else {
        alert('请先选择一个年龄段！');
      }
    });
    
    // 初始禁用按钮
    enterBtn.disabled = true;
  });