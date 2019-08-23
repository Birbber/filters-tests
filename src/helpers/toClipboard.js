const toClipboard = (data, successMessage) => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = data;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert(successMessage);
};

export default toClipboard;
