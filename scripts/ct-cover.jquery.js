// Author: Carl Thomas
(function($) {
    $.fn.ctCover = function() {
        var videoPlayer = this;
        var videoContainer = videoPlayer.parent();
        var videoPlayerHeight = videoPlayer.height();
        var videoPlayerWidth = videoPlayer.width();
        var initRatio = videoPlayer.width() / videoPlayer.height();

        function resize() {
            var containerHeight = videoContainer.height();
            var containerWidth = videoContainer.width();
            var tempHeight = containerWidth / initRatio;

            if (containerHeight < tempHeight) {
                resizeByWidth(containerWidth, containerHeight);
            } else {
                resizeByHeight(containerHeight, containerWidth);
            }
        }

        function resizeByWidth(width, containerHeight) {
            var height = width / initRatio;
            var negativeTop = ((height - containerHeight) / 2) * -1;
            videoPlayer.css({marginLeft: 0, marginTop: negativeTop, width: width, height: height});
        }

        function resizeByHeight(height, containerWidth) {
            var width = height * initRatio;
            var negativeLeft = ((width - containerWidth) / 2) * -1;
            videoPlayer.css({marginLeft: negativeLeft, marginTop: 0, width: width, height: height});
        }

        resize();

        $(window).resize(function(){
            resize();
        });
    };
}(jQuery));
