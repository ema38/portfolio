document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        const videoID = e.target.getAttribute('data-video-id');
        const videoIframe = document.getElementById('youtube-video');
        videoIframe.src = `https://www.youtube.com/embed/${videoID}`;
    });
});