    function gettime(t) {
        var date = new Date();
        if (t) {
            date = new Date(t)
        };
        var obj = new Object();
        obj.year = date.getFullYear();
        obj.month = change(date.getMonth() + 1);
        obj.day = change(date.getDate());
        obj.hour = change(date.getHours());
        obj.minute = change(date.getMinutes());
        obj.second = change(date.getSeconds());
        return obj;
    }

    function change(l) {
        return l.toString().length < 2 ? '0' + l : l;
    }

    function one(t) {
        var time = gettime(t);
        return time.year + '-' + time.month + '-' + time.day;
    };

    function two(t) {
        var time = gettime(t);
        return time.year + '-' + time.month + '-' + time.day + ' ' + time.hour + 'h';
    };

    function three(t) {
        var time = gettime(t);
        return time.year + '-' + time.month + '-' + time.day + ' ' + time.hour + ':' + time.minute + ':' + time.second;
    };

    function format(t) {
        if (!t) {
            return ''
        } else {
            var time = gettime(t);
            return time.year + '-' + time.month + '-' + time.day + 'T' + time.hour + ':' + time.minute;
        }
    }
    export default{
        one: one,
        two: two,
        three: three,
        format: format
    }
