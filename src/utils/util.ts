export const BASEURL = "https://testcodex.com/music_backend/public/api/"
// export const BASEURL = "https://api.dhunn.pk/api/"

export const serialize = (obj: any | {}) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  };

  export const durationToSeconds = (duration:any) => {
    if (typeof duration === 'number') {
      return duration; 
    }
    
    if (typeof duration === 'string') {
      const parts = duration.split(':'); 
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      return (minutes * 60) + seconds;
    }
  
    return 0;
  };
  
  export const formatTime = (time: any) => {
    // Check if time is not a valid number
    if (typeof time !== 'number' || isNaN(time) || time < 0) {
        return "00:00"; // Return "00:00" if time is invalid
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};