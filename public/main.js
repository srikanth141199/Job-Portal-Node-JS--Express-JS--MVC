function deleteJob(id) {
    const result = confirm(
      'Are you sure you want to delete this Job ?'
    );
    if (result) {
      fetch('/delete-job/' + id, {
        method: 'POST',
      }).then((res) => {
        if (res.ok) {
          window.location.href = "/";
        }
      });
    }
  }
  