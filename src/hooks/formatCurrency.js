// Format lại price theo yêu cầu đề bài
const formatCurrency = (currency) => {
  return new Intl.NumberFormat("en-DE").format(currency) + ` VND`;
};

export default formatCurrency;
