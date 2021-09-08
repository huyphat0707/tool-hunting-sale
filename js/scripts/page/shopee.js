const username = localStorage.getItem("username");

if (username) {
  const interval_obj = setInterval(async function () {
    const date = new Date();
    switch (date.getHours() && date.getMinutes()) {
      case 15 && 53:
        if (window.location.href.indexOf("https://shopee.vn/checkout") > -1) {
          clearInterval(interval_obj);
          await clickApply();
        }
        break;
      case 00 && 00:
        if (window.location.href.indexOf("https://shopee.vn/checkout") > -1) {
          clearInterval(interval_obj);
          await clickApply();
        }
        break;
      default:
        break;
    }
  }, 300);

  function clickApply() {
    return new Promise(async (resolve, reject) => {
      const model = $(".shopee-popover._2S7SLf");
      if (model.length > 0) {
        const btnApply = $(".stardust-button._154h4a._1oOOcq");
        await btnApply.click();
        getMessage();
      } else {
        await timeOut();
        resolve(clickApply());
      }
    });
  }

  function getMessage() {
    return new Promise(async (resolve, reject) => {
      const modelVoucher = $(".shopee-popover._2S7SLf");
      if (modelVoucher.length < 1) {
        clickBtnOrder();
      } else {
        await timeOut();
        resolve(getMessage());
      }
    });
  }
  function clickBtnOrder() {
    const intervalBtnOrder = setInterval(() => {
      const btnOrder = $(
        ".stardust-button.stardust-button--primary.stardust-button--large._1qSlAe"
      );
      if (btnOrder.length > 0) {
        btnOrder.click();
        clearInterval(intervalBtnOrder);
      }
    }, 500);
  }
}
function timeOut(ms = Math.random * 4 * 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
