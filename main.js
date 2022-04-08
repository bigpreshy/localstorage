document.getElementById('image').addEventListener('change', (e)=>{
    const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        console.log(base64String);
        localStorage.setItem('nameofImage', base64String);
        document.getElementsByTagName("img")[0].src = `data:image/png;base64,${base64String}`;
      };
      reader.readAsDataURL(file);
  })