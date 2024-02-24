(this.webpackJsonpadminportal = this.webpackJsonpadminportal || []).push([[0], {
    464: function(e, t, r) {},
    466: function(e, t, r) {},
    913: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = r(1)
          , n = r.n(a)
          , c = r(27)
          , s = r.n(c)
          , o = (r(464),
        r(12))
          , i = (r(465),
        r(466),
        r(19))
          , l = r(15)
          , u = r(4)
          , d = r(7)
          , b = r(2)
          , j = r(10)
          , h = r.n(j)
          , p = r(16)
          , O = r(14)
          , m = r(441)
          , f = r(442)
          , g = (r(472),
        r(618).default)
          , x = new (function() {
            function e() {
                Object(m.a)(this, e),
                this.baseUrL = "https://api-server.banoqabil.pk/"
            }
            return Object(f.a)(e, [{
                key: "getApi",
                value: function() {
                    var e = Object(p.a)(h.a.mark((function e(t, r, a) {
                        var n, c, s;
                        return h.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = "",
                                    a && Object.keys(a).forEach((function(e) {
                                        n += e + "=" + a[e] + "&"
                                    }
                                    )),
                                    c = this.baseUrL + t + "?" + n,
                                    e.next = 5,
                                    g.get(c, {
                                        headers: {
                                            Authorization: "Bearer " + r
                                        }
                                    });
                                case 5:
                                    return s = e.sent,
                                    e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "postApi",
                value: function() {
                    var e = Object(p.a)(h.a.mark((function e(t, r, a) {
                        var n, c;
                        return h.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = this.baseUrL + t,
                                    e.next = 3,
                                    g.post(n, a, {
                                        headers: {
                                            Authorization: "Bearer " + r
                                        }
                                    });
                                case 3:
                                    return c = e.sent,
                                    e.abrupt("return", c);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }());
        function v(e) {
            return x.postApi("api/user/login", "", {
                f8996da763b7a969b1: e.userName,
                d74ff0ee8da3b9806b: e.password
            })
        }
        function y(e) {
            return x.postApi("transaction/createuser", "", {
                name: e.name,
                phone: e.phone,
                gender: e.gender,
                education: e.education,
                dob: e.dob,
                categoryid: e.categoryid,
                city: e.city,
                area: e.area
            })
        }
        function w(e) {
            return x.postApi("score/submit", "", {
                name: e.name,
                phone: e.phone,
                gender: e.gender,
                fatherName: e.fatherName,
                coursesList: e.coursesList,
                scores: e.scores,
                score: e.score
            })
        }
        function k(e) {
            return x.postApi("score/submit/v2", "", {
                name: e.name,
                phone: e.phone,
                gender: e.gender,
                fatherName: e.fatherName,
                coursesList: e.coursesList,
                score: e.score
            })
        }
        function A(e) {
            return x.postApi("course/enrollemnt-reg", "", {
                name: e.name,
                phone: e.phone,
                gender: e.gender,
                fatherName: e.fatherName,
                email: e.email,
                cnic: e.cnic,
                fatherCnic: e.fatherCnic,
                whatsapp: e.whatsapp,
                dob: e.dob,
                address: e.address,
                haveSmartPhone: e.haveSmartPhone,
                haveComputerFacility: e.haveComputerFacility,
                education: e.education,
                job: e.job,
                course: e.course,
                loc: e.loc,
                IMGDATA: e.IMGDATA,
                imgname: e.imgname
            })
        }
        function C(e) {
            return x.getApi("score/getrecords", "", {
                phone: e.phone
            })
        }
        function N(e) {
            return x.getApi("score/getrecords1", "", {
                phone: e.phone
            })
        }
        var S = Object(O.createAsyncThunk)("authentication/login", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            v(t);
                        case 2:
                            return r = e.sent,
                            console.log(r),
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , F = Object(O.createAsyncThunk)("authentication/fetchUserDetails", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            x.getApi("user/details", a);
                        case 2:
                            return r = e.sent,
                            console.log(r),
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                    var a
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , D = Object(O.createAsyncThunk)("authentication/register", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            y(t);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , B = Object(O.createAsyncThunk)("score/submit", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            w(t);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , R = Object(O.createAsyncThunk)("score/submitnew", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            k(t);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , E = Object(O.createAsyncThunk)("score/enrollment-reg", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            A(t);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , P = Object(O.createAsyncThunk)("score/get", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            C(t);
                        case 2:
                            return r = e.sent,
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , M = Object(O.createAsyncThunk)("score/get1", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            N(t);
                        case 2:
                            return r = e.sent,
                            console.log(r),
                            e.abrupt("return", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , T = Object(O.createSlice)({
            name: "authentication",
            initialState: {
                token: "",
                data: {},
                userProfile: {},
                status: "idle"
            },
            reducers: {
                resetToken: function(e) {
                    e.token = ""
                },
                resetScore: function(e) {
                    e.scoreRecords = []
                }
            },
            extraReducers: function(e) {
                e.addCase(S.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(S.fulfilled, (function(e, t) {
                    e.token = t.payload.data.token,
                    e.data = t.payload.data.data,
                    e.status = "idle"
                }
                )).addCase(S.rejected, (function(e, t) {
                    o.b.error("Invalid Username or password."),
                    e.status = "idle"
                }
                )).addCase(F.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(F.fulfilled, (function(e, t) {
                    e.userProfile = t.payload.data,
                    e.status = "idle"
                }
                )).addCase(D.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(D.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.token = "1",
                    o.b.success("User registered successfully, your phone number will be you registration number on event day !")
                }
                )).addCase(B.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(B.fulfilled, (function(e, t) {
                    o.b.success("Score submitted."),
                    e.status = "idle"
                }
                )).addCase(B.rejected, (function(e, t) {
                    o.b.error("Operation failed."),
                    e.status = "idle"
                }
                )).addCase(P.fulfilled, (function(e, t) {
                    console.log(t.payload.records, "Test"),
                    e.scoreRecords = t.payload.records,
                    o.b.success("Details fetched. "),
                    e.status = "idle"
                }
                )).addCase(P.rejected, (function(e, t) {
                    o.b.error("Operation failed."),
                    e.status = "idle"
                }
                )).addCase(M.fulfilled, (function(e, t) {
                    console.log(t.payload.records, "Test"),
                    e.scoreRecords = t.payload.records,
                    e.scoreRecords && e.scoreRecords.length > 0 ? o.b.success("Details fetched. ") : o.b.error("No result found"),
                    e.status = "idle"
                }
                )).addCase(M.rejected, (function(e, t) {
                    o.b.error("No result found"),
                    e.status = "idle"
                }
                )).addCase(R.fulfilled, (function(e, t) {
                    o.b.success("Score submitted."),
                    e.status = "idle"
                }
                )).addCase(R.rejected, (function(e, t) {
                    o.b.error("Operation failed."),
                    e.status = "idle"
                }
                )).addCase(E.fulfilled, (function(e, t) {
                    o.b.success("Enrollment submitted."),
                    e.status = "idle"
                }
                )).addCase(E.rejected, (function(e, t) {
                    o.b.error("Operation failed."),
                    e.status = "idle"
                }
                ))
            }
        })
          , I = T.actions
          , L = (I.resetToken,
        I.resetScore)
          , W = function(e) {
            return e.authentication.token
        }
          , U = function(e) {
            return e.authentication.data
        }
          , Q = function(e) {
            return e.authentication.userProfile
        }
          , z = function(e) {
            return e.authentication.scoreRecords
        }
          , G = T.reducer
          , V = (r.p,
        r.p,
        r(636),
        r(649),
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p,
        r.p + "static/media/logo.1fcd27f2.png")
          , H = (r.p,
        r.p + "static/media/play.f902960a.png")
          , q = (r.p,
        r(443))
          , Y = r(0)
          , J = q.Link;
        function K() {
            var e = Object(d.c)(W)
              , t = (Object(d.c)(U),
            Object(d.b)());
            Object(a.useEffect)((function() {
                t(F({
                    token: e
                }))
            }
            ), []);
            Object(d.c)(Q),
            Object(l.g)(),
            Object(l.f)();
            var r = Object(a.useState)(!1)
              , n = Object(u.a)(r, 2)
              , c = n[0]
              , s = n[1];
            return Object(Y.jsx)(b.D, {
                expand: "lg",
                light: !0,
                bgColor: "light",
                children: Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsx)(b.E, {
                        href: "/",
                        children: Object(Y.jsx)("img", {
                            src: V,
                            style: {
                                height: "50px"
                            }
                        })
                    }), Object(Y.jsx)(b.H, {
                        type: "button",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        onClick: function() {
                            return s(!c)
                        },
                        children: Object(Y.jsx)(b.u, {
                            icon: "bars",
                            fas: !0
                        })
                    }), Object(Y.jsxs)(b.p, {
                        navbar: !0,
                        show: c,
                        children: [Object(Y.jsxs)(b.G, {
                            left: !0,
                            children: [Object(Y.jsx)(b.F, {
                                children: Object(Y.jsxs)(J, {
                                    to: "courses-pnl",
                                    children: [" ", Object(Y.jsx)(b.r, {
                                        href: "#",
                                        className: "m-2",
                                        children: "Courses"
                                    })]
                                })
                            }), Object(Y.jsx)(b.F, {
                                children: Object(Y.jsxs)(J, {
                                    to: "partner-pnl",
                                    children: [" ", Object(Y.jsx)(b.r, {
                                        href: "#",
                                        className: "m-2",
                                        children: "Partners"
                                    }), " "]
                                })
                            }), Object(Y.jsx)(b.F, {
                                children: Object(Y.jsxs)(J, {
                                    to: "contact-pnl",
                                    children: ["  ", Object(Y.jsx)(b.r, {
                                        href: "#",
                                        className: "m-2",
                                        children: "Contact us"
                                    }), " "]
                                })
                            }), Object(Y.jsx)(b.F, {
                                children: Object(Y.jsx)(b.c, {
                                    href: "/signup",
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    className: "m-2",
                                    children: "Register now"
                                })
                            }), Object(Y.jsx)(b.F, {
                                children: Object(Y.jsx)(b.c, {
                                    href: "/result",
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    className: "m-2",
                                    children: "Result"
                                })
                            })]
                        }), Object(Y.jsx)(b.G, {
                            right: !0,
                            className: "d-flex justify-content-end",
                            children: Object(Y.jsx)(b.F, {
                                children: Object(Y.jsx)("a", {
                                    href: "https://play.google.com/store/apps/details?id=com.banoQabil",
                                    children: Object(Y.jsx)("img", {
                                        src: H,
                                        style: {
                                            height: "70px"
                                        }
                                    })
                                })
                            })
                        })]
                    })]
                })
            })
        }
        function X() {
            Object(d.c)(W),
            Object(d.c)(U),
            Object(d.b)(),
            Object(l.g)(),
            Object(l.f)();
            var e = Object(a.useState)(!1)
              , t = Object(u.a)(e, 2);
            t[0],
            t[1];
            return Object(Y.jsxs)(b.t, {
                backgroundColor: "light",
                children: [Object(Y.jsxs)("div", {
                    className: "text-center pt-3",
                    style: {
                        backgroundColor: "#138E82",
                        color: "white"
                    },
                    children: [Object(Y.jsx)("a", {
                        href: "https://www.facebook.com/alkhidmatKHI",
                        children: Object(Y.jsx)("img", {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAh1BMVEUAAACq//+////////MzP/V1f/b2//////k8v/c3P/e5v/h6f/i6f/g6v/c5v/f6P/f6P/b6f/c5f/f6f/e5//b5P/e5//d6f/e5f/e5//c5//c5v/d5//b5//d5//d6P/c5v/c5//d5v/c5//b5v/d5//c5v/c5//d6P/d5v/c5//d5//e5//693XqAAAALXRSTlMAAwQEBQYHBxMWHyIjMTM3ODk6UFRVVWpsc3R8fn9/j5ChpqmsrK+3ubu+vr9+KFwQAAAAAWJLR0QDEQxM8gAAAIVJREFUKM/dzzcSwkAQRNGP8EbCChgQCAYzmL3/+UipknYCFRE/fUk3awvRLMfREIzg1oDvh812d7zW82OZAFDU8msGDhe4PAfoTLKsrOUB0D9Hl/eANH6sDSwa8UVVEyBVVX1WeMhXN5e7b5dHweVplfci0gLGInL69e+/YvPYyC3OtvoAQXV9ZkgOfXgAAAAASUVORK5CYII=",
                            style: {
                                height: "25px"
                            },
                            className: "mx-2"
                        })
                    }), Object(Y.jsx)("a", {
                        href: "https://www.instagram.com/accounts/login/?next=/alkhidmatkarachi/",
                        children: Object(Y.jsx)("img", {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA4VBMVEUAAAD////////V1f/b2//////b5P/k5P/c5f/W4//d6v/d5P/e5f/e4//e6f/c5v/i5v/d5//a4//f6P/g6v/d5P/d6P/e6P/b5f/f6P/c5v/a5v/d6f/d6f/f6P/c5f/b5v/e5v/c5v/c5v/f6f/d5v/d5v/d6P/d6P/c5//c5f/f5//d6P/e5//d5//d5//d6f/d5//c5//f6P/d6P/c5v/d5f/e5//d5//c5//d6P/c5//e6P/e5//d6P/d5//d5v/d5//d5//c5//c5v/d6P/d5v/e5v/c5//d5//e5/+3nK/oAAAAS3RSTlMAAQIGBwccHB0lJSYnLi4zNDU3N0lMTE1OT1FSUlNXWGRlZmdnb3BwcXV2dnh9foiIiYqOj5CUlJWho6mpqrO0tbW2t7i5u7u+vr8g4rNvAAAAAWJLR0QB/wIt3gAAATtJREFUKM99k2lXgkAUht/IxCUMsVxbMQ0XJLcM3EMT5v//oIZhPIIyvR+Ye+Y53H0AqlvD2ZGYdo6RR6ibvk8S5PdSjH4TgWYB7xOhujSuL8Z+Dga3rAftjksrW5y34bBzpSKm4ppd22AV+SoK0+3R53aqQGOWC3ZYKHjRoJ6CITNCXMY0Ap/vyQSVCNawYufcNBeEvL6QFUoRrGJPv7+1K0CqH6i5h3qBa8g0mzIayXguZVyarCwtE7GJ98DWMRDgZmC/CfBCkqnzn7TAOakjretpPAkyPzQkWtjjZWHHtizNwTIcUawt8aZSjVGN4E8o5yMZhThc0SKUyWmgY4X7dvk6rLX4OpQ2fB0++C/DymmZqiN+2UL+n1X0skBPjDs0TGomol/smaS6if69zjXPM9e2z5+g3coG5A9ZvcTeB3GqCQAAAABJRU5ErkJggg==",
                            style: {
                                height: "25px"
                            },
                            className: "mx-2"
                        })
                    }), Object(Y.jsx)("a", {
                        href: "https://www.linkedin.com/company/alkhidmatkarachi/",
                        children: Object(Y.jsx)("img", {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAn1BMVEUAAAD///////+////////o6P/k8v/f6v/e5v/a6f/c4//W4//h5//b5//b7f/b5f/c5f/b5//c6P/e5f/d6f/e5//e5//f6P/c5f/c6P/d6P/b5v/e5f/e6P/e5//d6P/d5v/b5//d5//e5//e5//c5v/c6P/d5v/d5//e5//c5//d5//e6P/d5//d5v/d6P/d5v/c5//c5//d5//e5/+T1pCBAAAANXRSTlMAAQIEBAsTGB8iJCUqKysxOkBCRVNUVVdYWFpkbG1zeHl/f4KUl5ucn6Chp6mrrrO1vb6+v1ypv50AAAABYktHRAH/Ai3eAAAAnUlEQVQoz83Ttw7CQBCE4Z+cw5HBJB/RJuN5/2ejR9pDQhRM+xU7xQ7tVGbSFgGVUrIQZyiY3/BhFN1tvpWgZ/MRqNn87FJcB25np1ugWua93+nsvb/cl9MoeeMH0FcMRGUgN7e4AEBub3B+tmoDA4PH0rUAHYNjSRVoGLyRVIX63/DTObfQ1jm3kzR0bvLLZ/qSP8wgOKKEVhLQ5gv/b5jvdN1yjAAAAABJRU5ErkJggg==",
                            style: {
                                height: "25px"
                            },
                            className: "mx-2"
                        })
                    })]
                }), Object(Y.jsxs)("div", {
                    className: "text-center py-3",
                    style: {
                        backgroundColor: "#138E82",
                        color: "white"
                    },
                    children: [Object(Y.jsx)("hr", {
                        className: "mt-0"
                    }), "\xa9 ", (new Date).getFullYear(), " Copyright:", " ", Object(Y.jsxs)("a", {
                        className: "text-light",
                        href: "https://banoqabil.com/",
                        children: [Object(Y.jsx)("span", {
                            style: {
                                color: "#F7B900"
                            },
                            children: " Bano Qabil "
                        }), ", All rights Reserved."]
                    }), " Powered by  ", Object(Y.jsx)("a", {
                        className: "",
                        style: {
                            color: "#F7B900"
                        },
                        href: "https://banoqabil.com/",
                        children: "Alkhidmat Karachi"
                    })]
                })]
            })
        }
        function Z() {
            Object(d.c)(W);
            var e = Object(d.c)(U);
            console.log(e);
            Object(d.b)();
            var t = Object(a.useState)("")
              , r = Object(u.a)(t, 2)
              , n = (r[0],
            r[1],
            Object(a.useState)(""))
              , c = Object(u.a)(n, 2)
              , s = (c[0],
            c[1],
            Object(l.g)(),
            Object(l.f)(),
            Object(a.useState)(!1))
              , o = Object(u.a)(s, 2)
              , i = (o[0],
            o[1],
            Object(d.c)(Q));
            return console.log(i, "prof"),
            Object(Y.jsxs)("div", {
                style: {
                    backgroundColor: "#FFFFFF"
                },
                children: [Object(Y.jsx)(K, {}), Object(Y.jsx)(b.i, {
                    showControls: !0,
                    pause: !1,
                    children: Object(Y.jsxs)(b.l, {
                        children: [Object(Y.jsxs)(b.m, {
                            className: "active",
                            children: [Object(Y.jsx)(b.k, {
                                src: "https://alkhidmat.com/miscimgs/webcover5.jpg",
                                alt: "...",
                                style: {}
                            }), Object(Y.jsx)(b.j, {
                                style: {
                                    paddingBottom: "100px"
                                }
                            })]
                        }), Object(Y.jsxs)(b.m, {
                            className: "",
                            children: [Object(Y.jsx)(b.k, {
                                src: "https://alkhidmat.com/miscimgs/regcls.jpg",
                                alt: "...",
                                style: {}
                            }), Object(Y.jsx)(b.j, {
                                style: {
                                    paddingBottom: "100px"
                                }
                            })]
                        }), Object(Y.jsxs)(b.m, {
                            className: " ",
                            children: [Object(Y.jsx)(b.k, {
                                src: "https://alkhidmat.com/miscimgs/cover1.jpg",
                                alt: "...",
                                style: {}
                            }), Object(Y.jsx)(b.j, {
                                style: {
                                    paddingBottom: "100px"
                                }
                            })]
                        })]
                    })
                }), Object(Y.jsx)(b.I, {
                    className: "  d-flex flex-wrap p-5 m-0",
                    style: {
                        backgroundColor: "#005B52",
                        color: "#ffffff"
                    },
                    children: Object(Y.jsx)(b.o, {
                        className: "d-flex justify-content-center",
                        xs: "12",
                        md: "12",
                        children: Object(Y.jsx)("h5", {
                            children: " Registration open! Be ready for BanoQabil entry test at Bagh-e-jinnah Ground."
                        })
                    })
                }), Object(Y.jsxs)(b.q, {
                    children: [Object(Y.jsxs)(b.I, {
                        className: "mt-5",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("div", {
                            className: "video-responsive",
                            children: Object(Y.jsx)("iframe", {
                                className: "col-12 col-lg-8",
                                style: {
                                    minHeight: "500px"
                                },
                                src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FalkhidmatKHI%2Fvideos%2F1108416336703504%2F&show_text=false&height=300&t=0",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "mt-5",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("div", {
                            className: "video-responsive",
                            children: Object(Y.jsx)("iframe", {
                                className: "col-12 col-lg-8",
                                style: {
                                    minHeight: "500px"
                                },
                                src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FalkhidmatKHI%2Fvideos%2F490109882997861%2F&show_text=false&height=300&t=0",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "mt-5",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("div", {
                            className: "video-responsive",
                            children: Object(Y.jsx)("iframe", {
                                className: "col-12 col-lg-8",
                                style: {
                                    minHeight: "500px"
                                },
                                src: "https://www.youtube.com/embed/0bSF2sc4AWg",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "mt-5",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("div", {
                            className: "video-responsive",
                            children: Object(Y.jsx)("iframe", {
                                className: "col-12 col-lg-8",
                                style: {
                                    minHeight: "500px"
                                },
                                src: "https://www.youtube.com/embed/ZL6z-W_eqwA",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "mt-5",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("div", {
                            className: "video-responsive",
                            children: Object(Y.jsx)("iframe", {
                                className: "col-12 col-lg-8",
                                style: {
                                    minHeight: "500px"
                                },
                                src: "https://www.youtube.com/embed/kv4EwYhjxek",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "d-flex flex-wrap",
                        id: "courses-pnl",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)(b.o, {
                            size: "12",
                            children: Object(Y.jsx)("h1", {
                                className: "my-5",
                                children: "Careers"
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#243A73",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            icon: "laptop-code",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "Freelancer"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Freelancing offers an incredible opportunity to control the way that you work. As a freelancer, you have the freedom to work from anywhere, at any time. Appealing perks like these are leading to the growth of the freelancing industry."
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/2",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#198754",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            icon: "globe",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "Web Developer"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Web Developer in PHP & Laravel / MERN Stack Developer / Web Developer in ASP.NET CORE MVC"
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/3",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#0D6EFD",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            icon: "mobile-alt",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "App Developer"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Introduction to Dart Programming, Application Development Using Flutter and Dart, Testing with Dart and Flutter, Fundamentals of Millennial Entrepreneurship, Project."
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/4",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#2E0249",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            icon: "pen-nib",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "Graphic Designer"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports."
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/5",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#212529",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            fab: !0,
                                            icon: "amazon",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "Amazon FBA Virtual Assistant"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Introduction Amazon FBA Virtual Assistant, Product Hunting, Product Listing and Optimization, Amazon Wholesaler Account, Wholesale vs Private Label, Seller Central Expertise."
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/7",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        }), Object(Y.jsx)(b.o, {
                            className: "mb-5",
                            sm: "12",
                            lg: "4",
                            children: Object(Y.jsx)(b.d, {
                                style: {
                                    minHeight: "100%",
                                    backgroundColor: "#DC3545",
                                    color: "white"
                                },
                                children: Object(Y.jsxs)(b.e, {
                                    children: [Object(Y.jsxs)(b.h, {
                                        children: [Object(Y.jsx)(b.u, {
                                            icon: "bullhorn",
                                            size: "3x"
                                        }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h3", {
                                            className: "mt-2",
                                            children: "Digital Marketer"
                                        })]
                                    }), Object(Y.jsx)(b.g, {
                                        children: "Marketing Principles, Search Marketing & Optimization, Social Media Marketing & Optimization, Content, Affiliate and Inbound Marketing, Email Marketing & Lead Nurturing, Analytics, Fundamentals of Millennial Entrepreneurship."
                                    }), Object(Y.jsx)(b.c, {
                                        href: "/career-reg/6",
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                            color: "black"
                                        },
                                        className: "m-2",
                                        children: "Register now"
                                    })]
                                })
                            })
                        })]
                    }), Object(Y.jsxs)(b.I, {
                        className: "mb-5 d-flex justify-content-around",
                        id: "contact-pnl",
                        children: [Object(Y.jsx)("hr", {}), Object(Y.jsx)("h1", {
                            className: "my-5",
                            children: "Contact us"
                        }), Object(Y.jsxs)(b.o, {
                            lg: "6",
                            xs: "12",
                            children: [Object(Y.jsx)(b.u, {
                                icon: "map-marker-alt",
                                size: "3x"
                            }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)("h4", {
                                children: "501,Quaideen Colony, Karachi"
                            })]
                        }), Object(Y.jsxs)(b.o, {
                            lg: "6",
                            xs: "12",
                            children: [Object(Y.jsx)(b.u, {
                                icon: "phone",
                                size: "3x"
                            }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)("h4", {
                                className: "mb-3",
                                children: "(021) 111-503-504"
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        function _() {
            var e = Object(d.c)(W)
              , t = (Object(d.c)(U),
            Object(d.b)())
              , r = Object(a.useState)("")
              , n = Object(u.a)(r, 2)
              , c = n[0]
              , s = n[1]
              , o = Object(a.useState)("")
              , i = Object(u.a)(o, 2)
              , j = i[0]
              , h = i[1]
              , p = (Object(l.g)(),
            Object(l.f)())
              , O = Object(a.useState)(!1)
              , m = Object(u.a)(O, 2);
            m[0],
            m[1];
            return e ? Object(Y.jsx)(l.a, {
                to: {
                    pathname: "/",
                    state: {
                        from: p
                    }
                }
            }) : Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsx)(b.q, {
                    children: Object(Y.jsx)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: Object(Y.jsx)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Login"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Username",
                                    className: "mt-5 mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "email",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: c,
                                    onChange: function(e) {
                                        s(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Password",
                                    className: "mb-5 mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "password",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: j,
                                    onChange: function(e) {
                                        h(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.c, {
                                    onClick: function() {
                                        return t(S({
                                            userName: c,
                                            password: j
                                        }))
                                    },
                                    children: "Login"
                                }), Object(Y.jsx)("hr", {}), Object(Y.jsx)("h3", {
                                    children: "Didn't signed up yet ?"
                                }), Object(Y.jsx)(b.c, {
                                    color: "success",
                                    href: "/signup",
                                    children: "Sign up Now"
                                })]
                            })
                        })
                    })
                }), Object(Y.jsx)(X, {})]
            })
        }
        r(105);
        var $ = r(101);
        function ee(e, t) {
            Object(d.c)(W),
            Object(d.c)(U);
            var r = Object(d.b)()
              , n = Object(l.h)().id
              , c = Object(a.useState)("")
              , s = Object(u.a)(c, 2)
              , i = s[0]
              , j = s[1]
              , h = Object(a.useState)("")
              , p = Object(u.a)(h, 2)
              , O = p[0]
              , m = p[1]
              , f = Object(a.useState)("-1")
              , g = Object(u.a)(f, 2)
              , x = g[0]
              , v = g[1]
              , y = Object(a.useState)(n || "-1")
              , w = Object(u.a)(y, 2)
              , k = w[0]
              , A = w[1]
              , C = Object(a.useState)("")
              , N = Object(u.a)(C, 2)
              , S = N[0]
              , F = N[1]
              , B = Object(a.useState)("")
              , R = Object(u.a)(B, 2)
              , E = R[0]
              , P = R[1]
              , M = Object(a.useState)("")
              , T = Object(u.a)(M, 2)
              , I = T[0]
              , L = T[1]
              , Q = Object(l.g)()
              , z = (Object(l.f)(),
            Object(a.useState)(!1))
              , G = Object(u.a)(z, 2)
              , H = (G[0],
            G[1],
            Object(a.useState)(new Date))
              , q = Object(u.a)(H, 2)
              , J = (q[0],
            q[1],
            Object(a.useRef)(null));
            return Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsx)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: Object(Y.jsxs)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: [Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Register new account"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Name",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: i,
                                    onChange: function(e) {
                                        j(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Mobile",
                                    className: " mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: O,
                                    onChange: function(e) {
                                        m(e.target.value)
                                    }
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: x,
                                        onChange: function(e) {
                                            v(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select gender"
                                        }), Object(Y.jsx)("option", {
                                            value: "male",
                                            children: "Male"
                                        }), Object(Y.jsx)("option", {
                                            value: "female",
                                            children: "Female"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: S,
                                        onChange: function(e) {
                                            F(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select Education"
                                        }), Object(Y.jsx)("option", {
                                            value: "1",
                                            children: "Matric / O Levels"
                                        }), Object(Y.jsx)("option", {
                                            value: "2",
                                            children: "Intermediate / A Levels"
                                        }), Object(Y.jsx)("option", {
                                            value: "3",
                                            children: "Diploma"
                                        }), Object(Y.jsx)("option", {
                                            value: "4",
                                            children: "Graduate"
                                        })]
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "City",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: E,
                                    onChange: function(e) {
                                        P(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Area",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: I,
                                    onChange: function(e) {
                                        L(e.target.value)
                                    }
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: k,
                                        onChange: function(e) {
                                            A(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select preference"
                                        }), Object(Y.jsx)("option", {
                                            value: "2",
                                            children: "Freelancer"
                                        }), Object(Y.jsx)("option", {
                                            value: "3",
                                            children: "Web Developer"
                                        }), Object(Y.jsx)("option", {
                                            value: "4",
                                            children: "App Developer"
                                        }), Object(Y.jsx)("option", {
                                            value: "5",
                                            children: "Graphic Designer"
                                        }), Object(Y.jsx)("option", {
                                            value: "6",
                                            children: "Digital Marketer"
                                        }), Object(Y.jsx)("option", {
                                            value: "7",
                                            children: "Amazon FBA Virtual Assistant"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 d-flex justify-content-center my-2",
                                    children: Object(Y.jsx)($.a, {
                                        sitekey: "6Lei6XcgAAAAAC3CDydCqHph6gr6NhxnNXMxRB7K",
                                        onChange: function(e) {},
                                        ref: J
                                    })
                                }), Object(Y.jsx)(b.c, {
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    onClick: function() {
                                        var e = !0;
                                        J.current.getValue() || (o.b.error("Please check 'I am not a robot' box."),
                                        e = !1),
                                        i || (o.b.error("Name not provided."),
                                        e = !1),
                                        O || (o.b.error("Phone not provided."),
                                        e = !1),
                                        x && "-1" != x || (o.b.error("Gender not selected."),
                                        e = !1),
                                        S && "-1" != S || (o.b.error("Education not selected."),
                                        e = !1),
                                        k && "-1" != k || (o.b.error("Preference not selected."),
                                        e = !1),
                                        E || (o.b.error("City not provided."),
                                        e = !1),
                                        I || (o.b.error("Area not provided."),
                                        e = !1),
                                        e && r(D({
                                            name: i,
                                            gender: x,
                                            education: S,
                                            dob: "12/12/2020",
                                            phone: O,
                                            categoryid: k,
                                            city: E,
                                            area: I,
                                            callback: function() {
                                                j(""),
                                                Q("/success")
                                            }
                                        }))
                                    },
                                    children: "Register"
                                })]
                            }), Object(Y.jsx)(b.e, {
                                children: "Registration open! Be ready for BanoQabil entry test at Bagh-e-jinnah Ground."
                            })]
                        })
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        r(916);
        var te = r(122);
        function re(e, t) {
            return x.postApi("newad", t, e)
        }
        var ae = Object(O.createAsyncThunk)("ad/new", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            re(t.data, t.token);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            e.abrupt("return", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , ne = Object(O.createAsyncThunk)("ad/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            n = t.adType,
                            x.getApi("ads", a, {
                                adType: n
                            });
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a, n
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , ce = Object(O.createAsyncThunk)("ad/details", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            n = t.id,
                            x.getApi("ads/" + n + "/details", a, {});
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a, n
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , se = Object(O.createSlice)({
            name: "ad",
            initialState: {
                token: "",
                data: {},
                adDetails: {
                    profile: {},
                    details: {}
                },
                ads: [],
                status: "idle"
            },
            reducers: {},
            extraReducers: function(e) {
                e.addCase(ae.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(ae.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message)
                }
                )).addCase(ne.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(ne.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.ads = t.payload.list
                }
                )).addCase(ce.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(ce.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.adDetails = {
                        details: t.payload.details,
                        profile: t.payload.profile
                    }
                }
                ))
            }
        });
        Object(te.a)(se.actions);
        var oe = se.reducer;
        function ie(e, t) {
            return x.postApi("user/vendorprofile", t, e)
        }
        var le = Object(O.createAsyncThunk)("vendor/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            n = void 0,
                            x.getApi("vendors", a, {
                                adType: n
                            });
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a, n
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , ue = Object(O.createAsyncThunk)("vendor/details", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            n = t.id,
                            x.getApi("vendor/" + n + "/details", a, {});
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a, n
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , de = Object(O.createAsyncThunk)("ad/new", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            ie(t.data, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , be = Object(O.createSlice)({
            name: "vendor",
            initialState: {
                token: "",
                data: {},
                profiles: [],
                vendorDetails: {
                    reviews: [],
                    services: [],
                    profile: {}
                },
                status: "idle"
            },
            reducers: {},
            extraReducers: function(e) {
                e.addCase(le.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(le.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.profiles = t.payload.users
                }
                )).addCase(ue.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(ue.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.vendorDetails = {
                        reviews: t.payload.reviews,
                        services: t.payload.services,
                        profile: t.payload.profile
                    }
                }
                )).addCase(de.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(de.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message)
                }
                ))
            }
        });
        Object(te.a)(be.actions);
        be.reducer;
        r(45),
        r(86),
        r(213),
        r(385);
        r(208);
        var je = Object(O.createAsyncThunk)("blog/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            x.getApi("blog/list", a, {});
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , he = Object(O.createSlice)({
            name: "blog",
            initialState: {
                token: "",
                data: {},
                adDetails: {
                    profile: {},
                    details: {}
                },
                blogs: [],
                status: "idle"
            },
            reducers: {},
            extraReducers: function(e) {
                e.addCase(je.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(je.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.blogs = t.payload.blogs
                }
                ))
            }
        });
        Object(te.a)(he.actions);
        var pe = he.reducer;
        function Oe(e) {
            Object(d.c)(W),
            Object(d.c)(U),
            Object(d.b)();
            var t = Object(a.useState)("")
              , r = Object(u.a)(t, 2)
              , n = (r[0],
            r[1],
            Object(a.useState)(""))
              , c = Object(u.a)(n, 2)
              , s = (c[0],
            c[1],
            Object(a.useState)("-1"))
              , o = Object(u.a)(s, 2)
              , i = (o[0],
            o[1],
            Object(a.useState)(""))
              , j = Object(u.a)(i, 2)
              , h = (j[0],
            j[1],
            Object(l.g)(),
            Object(l.f)(),
            Object(a.useState)(!1))
              , p = Object(u.a)(h, 2)
              , O = (p[0],
            p[1],
            Object(a.useState)(new Date))
              , m = Object(u.a)(O, 2);
            m[0],
            m[1],
            Object(l.h)().id;
            return Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsx)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: Object(Y.jsx)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Registration successful !"
                                    })
                                }), Object(Y.jsxs)("p", {
                                    children: ["You have successfully regiesterd in ", Object(Y.jsx)("b", {
                                        children: "Bano Qabil"
                                    }), " Program your phone number will be used as your ", Object(Y.jsx)("b", {
                                        children: "enrollment number"
                                    }), " for test."]
                                })]
                            })
                        })
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        function me(e, t) {
            Object(d.c)(W);
            var r = Object(d.c)(z)
              , n = Object(d.b)()
              , c = Object(l.h)().id
              , s = Object(a.useState)("")
              , o = Object(u.a)(s, 2)
              , i = (o[0],
            o[1],
            Object(a.useState)(""))
              , j = Object(u.a)(i, 2)
              , h = (j[0],
            j[1],
            Object(a.useState)(""))
              , p = Object(u.a)(h, 2)
              , O = p[0]
              , m = p[1]
              , f = Object(a.useState)("male")
              , g = Object(u.a)(f, 2)
              , x = (g[0],
            g[1],
            Object(a.useState)(c || "-1"))
              , v = Object(u.a)(x, 2)
              , y = (v[0],
            v[1],
            Object(a.useState)([]))
              , w = Object(u.a)(y, 2)
              , k = (w[0],
            w[1])
              , A = Object(a.useState)([])
              , C = Object(u.a)(A, 2)
              , N = C[0]
              , S = (C[1],
            Object(a.useState)(!1))
              , F = Object(u.a)(S, 2)
              , D = (F[0],
            F[1],
            Object(a.useState)(!1))
              , R = Object(u.a)(D, 2)
              , E = (R[0],
            R[1],
            Object(a.useState)(!1))
              , M = Object(u.a)(E, 2)
              , T = (M[0],
            M[1],
            Object(a.useState)(!1))
              , I = Object(u.a)(T, 2)
              , U = (I[0],
            I[1],
            Object(a.useState)(!1))
              , Q = Object(u.a)(U, 2)
              , G = (Q[0],
            Q[1],
            Object(a.useState)(!1))
              , H = Object(u.a)(G, 2)
              , q = (H[0],
            H[1],
            Object(a.useRef)(null),
            []);
            return null === r || void 0 === r || r.forEach((function(e) {
                var t, r = null === N || void 0 === N || null === (t = N.find((function(t) {
                    return t.id == e.id
                }
                ))) || void 0 === t ? void 0 : t.score;
                q.push(Object(Y.jsxs)(Y.Fragment, {
                    children: [Object(Y.jsx)(b.d, {
                        style: {
                            maxWidth: "44rem"
                        },
                        className: "p-5",
                        children: Object(Y.jsxs)(b.e, {
                            children: [Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Candidate Name",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.name,
                                onChange: function(e) {}
                            }), Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Father Name",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.fathername,
                                onChange: function(e) {}
                            }), Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Father Name",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.gender,
                                onChange: function(e) {}
                            }), Object(Y.jsx)(b.v, {
                                label: "Score",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: r,
                                onChange: function(t) {
                                    (null === N || void 0 === N ? void 0 : N.find((function(t) {
                                        return t.id == e.id
                                    }
                                    ))) ? N.forEach((function(r) {
                                        e.id == r.id && (r.score = t.target.value)
                                    }
                                    )) : N.push({
                                        id: e.id,
                                        score: t.target.value
                                    })
                                }
                            }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {})]
                        })
                    }), Object(Y.jsx)("hr", {})]
                }))
            }
            )),
            Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsxs)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: [Object(Y.jsx)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Submit Result"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Mobile",
                                    className: " mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: O,
                                    onChange: function(e) {
                                        m(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.c, {
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    onClick: function() {
                                        O && n(P({
                                            phone: O
                                        }))
                                    },
                                    children: " Find"
                                }), " ", Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {})]
                            })
                        }), Object(Y.jsx)("hr", {}), q]
                    }), Object(Y.jsx)(b.I, {
                        children: Object(Y.jsx)(b.c, {
                            style: {
                                backgroundColor: "#2D8E84"
                            },
                            onClick: function() {
                                console.log(r),
                                n(B({
                                    scores: N,
                                    callback: function() {
                                        k(""),
                                        m(""),
                                        n(L())
                                    }
                                }))
                            },
                            children: "Submit Result"
                        })
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        function fe(e, t) {
            Object(d.c)(W),
            Object(d.c)(U);
            var r = Object(d.b)()
              , n = Object(l.h)().id
              , c = Object(a.useState)("")
              , s = Object(u.a)(c, 2)
              , i = s[0]
              , j = s[1]
              , h = Object(a.useState)("")
              , p = Object(u.a)(h, 2)
              , O = p[0]
              , m = p[1]
              , f = Object(a.useState)("")
              , g = Object(u.a)(f, 2)
              , x = g[0]
              , v = g[1]
              , y = Object(a.useState)("male")
              , w = Object(u.a)(y, 2)
              , k = w[0]
              , A = w[1]
              , C = Object(a.useState)(n || "-1")
              , N = Object(u.a)(C, 2)
              , S = (N[0],
            N[1],
            Object(a.useState)(""))
              , F = Object(u.a)(S, 2)
              , D = F[0]
              , B = F[1]
              , E = Object(a.useState)(!1)
              , P = Object(u.a)(E, 2)
              , M = P[0]
              , T = P[1]
              , I = Object(a.useState)(!1)
              , L = Object(u.a)(I, 2)
              , Q = L[0]
              , z = L[1]
              , G = Object(a.useState)(!1)
              , H = Object(u.a)(G, 2)
              , q = H[0]
              , J = H[1]
              , Z = Object(a.useState)(!1)
              , _ = Object(u.a)(Z, 2)
              , $ = _[0]
              , ee = _[1]
              , te = Object(a.useState)(!1)
              , re = Object(u.a)(te, 2)
              , ae = re[0]
              , ne = re[1]
              , ce = Object(a.useState)(!1)
              , se = Object(u.a)(ce, 2)
              , oe = se[0]
              , ie = se[1];
            Object(l.g)(),
            Object(l.f)(),
            Object(a.useRef)(null);
            return Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsx)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: Object(Y.jsx)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Submit Result"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Candidate Name",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: i,
                                    onChange: function(e) {
                                        j(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Father Name",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: O,
                                    onChange: function(e) {
                                        m(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Mobile",
                                    className: " mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: x,
                                    onChange: function(e) {
                                        v(e.target.value)
                                    }
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: k,
                                        onChange: function(e) {
                                            A(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select gender"
                                        }), Object(Y.jsx)("option", {
                                            value: "male",
                                            children: "Male"
                                        }), Object(Y.jsx)("option", {
                                            value: "female",
                                            children: "Female"
                                        })]
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Score",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: D,
                                    onChange: function(e) {
                                        B(e.target.value)
                                    }
                                }), Object(Y.jsx)("br", {}), Object(Y.jsx)("h5", {
                                    children: "Selected Courses"
                                }), Object(Y.jsx)("br", {}), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox1",
                                    value: "option1",
                                    label: "Freelancer",
                                    checked: M,
                                    inline: !0,
                                    onChange: function(e) {
                                        T(e.target.checked)
                                    }
                                }), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox2",
                                    value: "option2",
                                    label: "Web developer",
                                    checked: Q,
                                    inline: !0,
                                    onChange: function(e) {
                                        z(e.target.checked)
                                    }
                                }), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox3",
                                    value: "option3",
                                    label: "App developer",
                                    checked: q,
                                    inline: !0,
                                    onChange: function(e) {
                                        J(e.target.checked)
                                    }
                                }), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox4",
                                    value: "option4",
                                    label: "Graphic designer",
                                    checked: $,
                                    inline: !0,
                                    onChange: function(e) {
                                        ee(e.target.checked)
                                    }
                                }), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox5",
                                    value: "option5",
                                    label: "Amazon FBA virtual assistant",
                                    checked: ae,
                                    inline: !0,
                                    onChange: function(e) {
                                        ne(e.target.checked)
                                    }
                                }), Object(Y.jsx)(b.n, {
                                    name: "inlineCheck",
                                    id: "inlineCheckbox6",
                                    value: "option6",
                                    label: "Digital marketing",
                                    checked: oe,
                                    inline: !0,
                                    onChange: function(e) {
                                        ie(e.target.checked)
                                    }
                                }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)(b.c, {
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    onClick: function() {
                                        var e = !0
                                          , t = [];
                                        M && t.push(2),
                                        Q && t.push(3),
                                        q && t.push(4),
                                        $ && t.push(5),
                                        oe && t.push(6),
                                        ae && t.push(7),
                                        i || (o.b.error("Name not provided."),
                                        e = !1),
                                        x || (o.b.error("Phone not provided."),
                                        e = !1),
                                        k && "-1" != k || (o.b.error("Gender not selected."),
                                        e = !1),
                                        e && r(R({
                                            name: i,
                                            fatherName: O,
                                            score: D,
                                            gender: k,
                                            phone: x,
                                            coursesList: t,
                                            callback: function() {
                                                j(""),
                                                m(""),
                                                B(""),
                                                A("male"),
                                                v("")
                                            }
                                        }))
                                    },
                                    children: "Submit Result"
                                })]
                            })
                        })
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        function ge(e, t) {
            Object(d.c)(W);
            var r = Object(d.c)(z)
              , n = Object(d.b)()
              , c = Object(l.h)().id
              , s = Object(a.useState)("")
              , o = Object(u.a)(s, 2)
              , i = (o[0],
            o[1],
            Object(a.useState)(""))
              , j = Object(u.a)(i, 2)
              , h = (j[0],
            j[1],
            Object(a.useState)(""))
              , p = Object(u.a)(h, 2)
              , O = p[0]
              , m = p[1]
              , f = Object(a.useState)("male")
              , g = Object(u.a)(f, 2)
              , x = (g[0],
            g[1],
            Object(a.useState)(c || "-1"))
              , v = Object(u.a)(x, 2)
              , y = (v[0],
            v[1],
            Object(a.useState)([]))
              , w = Object(u.a)(y, 2)
              , k = (w[0],
            w[1],
            Object(a.useState)([]))
              , A = Object(u.a)(k, 2)
              , C = (A[0],
            A[1],
            Object(a.useState)(!1))
              , N = Object(u.a)(C, 2)
              , S = (N[0],
            N[1],
            Object(a.useState)(!1))
              , F = Object(u.a)(S, 2)
              , D = (F[0],
            F[1],
            Object(a.useState)(!1))
              , B = Object(u.a)(D, 2)
              , R = (B[0],
            B[1],
            Object(a.useState)(!1))
              , E = Object(u.a)(R, 2)
              , P = (E[0],
            E[1],
            Object(a.useState)(!1))
              , T = Object(u.a)(P, 2)
              , I = (T[0],
            T[1],
            Object(a.useState)(!1))
              , L = Object(u.a)(I, 2)
              , U = (L[0],
            L[1],
            Object(a.useState)(!1))
              , Q = Object(u.a)(U, 2)
              , G = Q[0]
              , H = Q[1]
              , q = (Object(a.useRef)(null),
            []);
            return r && r.length > 0 ? null === r || void 0 === r || r.forEach((function(e) {
                q.push(Object(Y.jsx)(Y.Fragment, {
                    children: Object(Y.jsx)(b.d, {
                        style: {
                            maxWidth: "44rem"
                        },
                        className: "p-5",
                        children: Object(Y.jsxs)(b.e, {
                            children: [Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Candidate Name",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.name
                            }), Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Father Name",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.fathername
                            }), Object(Y.jsx)(b.v, {
                                disabled: !0,
                                label: "Gender",
                                className: "mb-2",
                                icon: "envelope",
                                group: !0,
                                type: "text",
                                validate: !0,
                                error: "wrong",
                                success: "right",
                                value: e.gender
                            }), Object(Y.jsx)("br", {}), Object(Y.jsxs)("div", {
                                className: "w-100 ",
                                children: [e.score >= 25 ? Object(Y.jsx)("h4", {
                                    style: {
                                        color: "green"
                                    },
                                    children: "Congratulations as you have cleared the aptitude test and qualified for the Bano Qabil program. Please fill out the form by pressing the \u2018proceed\u2019 button below."
                                }) : Object(Y.jsx)("h4", {
                                    children: "You have not qualified for the Bano Qabil program in the 1st batch of successful candidates who obtained more than 50% marks."
                                }), Object(Y.jsx)("br", {}), e.score >= 25 ? Object(Y.jsx)(b.c, {
                                    href: "/reg-form?phone=" + e.phone + "&fathername=" + e.fathername + "&name=" + e.name + "&gender=" + e.gender,
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    className: "m-2",
                                    children: "Click here to proceed to registration"
                                }) : ""]
                            }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {})]
                        })
                    })
                }))
            }
            )) : q.push(Object(Y.jsx)("div", {})),
            Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsxs)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: [Object(Y.jsxs)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: [Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Check Result"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Mobile",
                                    className: " mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: O,
                                    onChange: function(e) {
                                        m(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.c, {
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    onClick: function() {
                                        O && (n(M({
                                            phone: "92" + O.substring(1, O.length)
                                        })),
                                        H(!1))
                                    },
                                    children: " Find"
                                }), " ", Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {})]
                            }), !G && Object(Y.jsxs)(b.g, {
                                children: ["If you find any issue in the result, please ", Object(Y.jsx)("a", {
                                    href: "#",
                                    children: Object(Y.jsx)("p", {
                                        onClick: function() {
                                            H(!0)
                                        },
                                        children: "report here"
                                    })
                                })]
                            }), G && Object(Y.jsx)("iframe", {
                                title: "Report issues in result here",
                                src: "https://docs.google.com/forms/d/e/1FAIpQLSeqhdxheIFBzMmK4aXlsIMefWsZOp9Dtjz_Ug0hknGM1pMG4g/viewform?embedded=true",
                                width: "640",
                                height: "1093",
                                frameborder: "0",
                                marginheight: "0",
                                marginwidth: "0",
                                children: "Loading\u2026"
                            })]
                        }), Object(Y.jsx)("hr", {}), !G && q]
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        var xe = r(100)
          , ve = r.n(xe);
        function ye(e, t) {
            Object(d.c)(W),
            Object(d.c)(U);
            var r = Object(d.b)()
              , n = Object(l.f)().search
              , c = new URLSearchParams(n)
              , s = c.get("phone")
              , i = Object(a.useState)(c.get("name"))
              , j = Object(u.a)(i, 2)
              , h = j[0]
              , p = j[1]
              , O = Object(a.useState)(c.get("fathername"))
              , m = Object(u.a)(O, 2)
              , f = m[0]
              , g = m[1]
              , x = Object(a.useState)("")
              , v = Object(u.a)(x, 2)
              , y = v[0]
              , w = v[1]
              , k = Object(a.useState)("")
              , A = Object(u.a)(k, 2)
              , C = A[0]
              , N = A[1]
              , S = Object(a.useState)("")
              , F = Object(u.a)(S, 2)
              , D = F[0]
              , B = F[1]
              , R = Object(a.useState)(c.get("gender"))
              , P = Object(u.a)(R, 2)
              , M = P[0]
              , T = P[1]
              , I = Object(a.useState)("-1")
              , L = Object(u.a)(I, 2)
              , Q = (L[0],
            L[1],
            Object(a.useState)(""))
              , z = Object(u.a)(Q, 2)
              , G = z[0]
              , H = z[1]
              , q = Object(a.useState)("-1")
              , J = Object(u.a)(q, 2)
              , Z = J[0]
              , _ = J[1]
              , $ = Object(a.useState)("-1")
              , ee = Object(u.a)($, 2)
              , te = ee[0]
              , re = ee[1]
              , ae = Object(a.useState)("-1")
              , ne = Object(u.a)(ae, 2)
              , ce = ne[0]
              , se = ne[1]
              , oe = Object(a.useState)("-1")
              , ie = Object(u.a)(oe, 2)
              , le = ie[0]
              , ue = ie[1]
              , de = Object(a.useState)("")
              , be = Object(u.a)(de, 2)
              , je = be[0]
              , he = be[1]
              , pe = Object(a.useState)("")
              , Oe = Object(u.a)(pe, 2)
              , me = Oe[0]
              , fe = Oe[1]
              , ge = Object(a.useState)("")
              , xe = Object(u.a)(ge, 2)
              , ye = xe[0]
              , we = xe[1]
              , ke = (Object(l.g)(),
            Object(l.f)(),
            Object(a.useState)(!1))
              , Ae = Object(u.a)(ke, 2)
              , Ce = (Ae[0],
            Ae[1],
            Object(a.useState)(new Date))
              , Ne = Object(u.a)(Ce, 2)
              , Se = Ne[0]
              , Fe = Ne[1]
              , De = (Object(a.useRef)(null),
            Object(a.useState)(null))
              , Be = Object(u.a)(De, 2)
              , Re = Be[0]
              , Ee = Be[1];
            return Object(Y.jsxs)("div", {
                children: [Object(Y.jsx)(K, {}), Object(Y.jsxs)(b.q, {
                    fluid: !0,
                    children: [Object(Y.jsx)(b.I, {
                        className: "d-flex justify-content-center py-5",
                        children: Object(Y.jsx)(b.d, {
                            style: {
                                maxWidth: "44rem"
                            },
                            className: "p-5",
                            children: Object(Y.jsxs)(b.e, {
                                children: [Object(Y.jsx)(b.h, {
                                    children: Object(Y.jsx)("h2", {
                                        children: "Course registration form"
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    disabled: !0,
                                    label: "Mobile",
                                    className: " mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: s
                                }), Object(Y.jsx)(b.v, {
                                    label: "Name",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: h,
                                    onChange: function(e) {
                                        p(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Father Name",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: f,
                                    onChange: function(e) {
                                        g(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Email",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: y,
                                    onChange: function(e) {
                                        w(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "CNIC",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: C,
                                    onChange: function(e) {
                                        N(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Father CNIC",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: D,
                                    onChange: function(e) {
                                        B(e.target.value)
                                    }
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: M,
                                        onChange: function(e) {
                                            T(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select gender"
                                        }), Object(Y.jsx)("option", {
                                            value: "Male",
                                            children: "Male"
                                        }), Object(Y.jsx)("option", {
                                            value: "Female",
                                            children: "Female"
                                        })]
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "WhatsApp Number",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: me,
                                    onChange: function(e) {
                                        fe(e.target.value)
                                    }
                                }), Object(Y.jsx)(b.v, {
                                    label: "Complete address",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: ye,
                                    onChange: function(e) {
                                        we(e.target.value)
                                    }
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: te,
                                        onChange: function(e) {
                                            re(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select course"
                                        }), Object(Y.jsx)("option", {
                                            value: "Freelancer",
                                            children: "Freelancer"
                                        }), Object(Y.jsx)("option", {
                                            value: "Digital Marketing",
                                            children: "Digital Marketing"
                                        }), Object(Y.jsx)("option", {
                                            value: "Graphic designing",
                                            children: "Graphic Designing"
                                        }), Object(Y.jsx)("option", {
                                            value: "Web app development MERN Stack",
                                            children: "Web app development MERN Stack"
                                        }), Object(Y.jsx)("option", {
                                            value: "Cross Platform Mobile App Dev, Dart & Flutter",
                                            children: "Cross Platform Mobile App Dev, Dart & Flutter"
                                        }), Object(Y.jsx)("option", {
                                            value: "Amazon FBA Virtual Assistance",
                                            children: "Amazon FBA Virtual Assistance"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: Z,
                                        onChange: function(e) {
                                            _(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Select preferred location to attend course"
                                        }), Object(Y.jsx)("option", {
                                            value: "North",
                                            children: "North"
                                        }), Object(Y.jsx)("option", {
                                            value: "Central",
                                            children: "Central"
                                        }), Object(Y.jsx)("option", {
                                            value: "South",
                                            children: "South"
                                        }), Object(Y.jsx)("option", {
                                            value: "East",
                                            children: "East"
                                        }), Object(Y.jsx)("option", {
                                            value: "West",
                                            children: "West"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: ce,
                                        onChange: function(e) {
                                            se(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Do you have personal smart phone?"
                                        }), Object(Y.jsx)("option", {
                                            value: "Yes",
                                            children: "Yes"
                                        }), Object(Y.jsx)("option", {
                                            value: "No",
                                            children: "No"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: le,
                                        onChange: function(e) {
                                            ue(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Do you have Computer facility at home?"
                                        }), Object(Y.jsx)("option", {
                                            value: "Yes",
                                            children: "Yes"
                                        }), Object(Y.jsx)("option", {
                                            value: "No",
                                            children: "No"
                                        })]
                                    })
                                }), Object(Y.jsx)("div", {
                                    className: "w-100 mb-2",
                                    children: Object(Y.jsxs)("select", {
                                        className: "browser-default custom-select w-100 p-2",
                                        style: {
                                            borderRadius: "5px",
                                            borderColor: "#BDBDBD"
                                        },
                                        value: G,
                                        onChange: function(e) {
                                            H(e.target.value)
                                        },
                                        children: [Object(Y.jsx)("option", {
                                            value: "-1",
                                            children: "Last completed qualification"
                                        }), Object(Y.jsx)("option", {
                                            value: "Matric / O Levels",
                                            children: "Matric / O Levels"
                                        }), Object(Y.jsx)("option", {
                                            value: "Intermediate / A Levels",
                                            children: "Intermediate / A Levels"
                                        }), Object(Y.jsx)("option", {
                                            value: "Diploma",
                                            children: "Diploma"
                                        }), Object(Y.jsx)("option", {
                                            value: "Bachelors",
                                            children: "Bachelors"
                                        }), Object(Y.jsx)("option", {
                                            value: "Masters",
                                            children: "Masters"
                                        })]
                                    })
                                }), Object(Y.jsx)(b.v, {
                                    label: "Current/ Previous Job",
                                    className: "mb-2",
                                    icon: "envelope",
                                    group: !0,
                                    type: "text",
                                    validate: !0,
                                    error: "wrong",
                                    success: "right",
                                    value: je,
                                    onChange: function(e) {
                                        he(e.target.value)
                                    }
                                }), Object(Y.jsxs)("div", {
                                    className: "w-100 text-start",
                                    children: [Object(Y.jsx)("label", {
                                        className: "text-start",
                                        children: "Date of birth"
                                    }), Object(Y.jsx)(ve.a, {
                                        selected: Se,
                                        onChange: function(e) {
                                            return Fe(e)
                                        },
                                        className: "w-100 mb-3 mt-1"
                                    })]
                                }), Object(Y.jsxs)("div", {
                                    className: "pt-5",
                                    children: [Object(Y.jsx)("h5", {
                                        children: "Upload passport size picture"
                                    }), Object(Y.jsx)("br", {}), Object(Y.jsx)("input", {
                                        type: "file",
                                        name: "myImage",
                                        onChange: function(e) {
                                            Ee(e.target.files[0])
                                        }
                                    })]
                                }), Object(Y.jsx)("br", {}), Object(Y.jsx)("br", {}), Object(Y.jsx)(b.c, {
                                    style: {
                                        backgroundColor: "#2D8E84"
                                    },
                                    onClick: function() {
                                        var e, t = !0;
                                        h || (o.b.error("Name not provided."),
                                        t = !1),
                                        s || (o.b.error("Phone not provided."),
                                        t = !1),
                                        M && "-1" != M || (o.b.error("Gender not selected."),
                                        t = !1),
                                        G && "-1" != G || (o.b.error("Education not selected."),
                                        t = !1),
                                        D && "-1" != D || (o.b.error("Father cnic not selected."),
                                        t = !1),
                                        C && "-1" != C || (o.b.error("Cnic not selected."),
                                        t = !1),
                                        f && "-1" != f || (o.b.error("Father name not selected."),
                                        t = !1),
                                        le && "-1" != le || (o.b.error("Computer facility not selected."),
                                        t = !1),
                                        ce && "-1" != ce || (o.b.error("Smart phone facility not selected."),
                                        t = !1),
                                        Re || (o.b.error("Image not selected."),
                                        t = !1),
                                        y && "-1" != y || (o.b.error("Email *-not selected."),
                                        t = !1),
                                        (e = Re,
                                        new Promise((function(t, r) {
                                            var a = new FileReader;
                                            a.readAsDataURL(e),
                                            a.onload = function() {
                                                t(a.result)
                                            }
                                            ,
                                            a.onerror = function(e) {
                                                r(e)
                                            }
                                        }
                                        ))).then((function(e) {
                                            t && r(E({
                                                name: h,
                                                gender: M,
                                                education: G,
                                                dob: Se.getDate() + "-" + (Se.getMonth() + 1) + "-" + Se.getFullYear(),
                                                phone: s,
                                                fatherName: f,
                                                fatherCnic: D,
                                                cnic: C,
                                                email: y,
                                                whatsapp: me,
                                                address: ye,
                                                haveSmartPhone: ce,
                                                haveComputerFacility: le,
                                                job: je,
                                                loc: Z,
                                                course: te,
                                                IMGDATA: e,
                                                imgname: null === Re || void 0 === Re ? void 0 : Re.name,
                                                callback: function() {
                                                    p("")
                                                }
                                            }))
                                        }
                                        ))
                                    },
                                    children: "Submit"
                                })]
                            })
                        })
                    }), Object(Y.jsxs)(b.I, {
                        style: {
                            backgroundColor: "#F8F9FA"
                        },
                        className: "p-5",
                        children: [Object(Y.jsx)(b.o, {
                            lg: "3",
                            xs: "12",
                            children: Object(Y.jsx)("img", {
                                src: V,
                                style: {
                                    height: "200px"
                                }
                            })
                        }), Object(Y.jsxs)(b.o, {
                            lg: "9",
                            xs: "12",
                            className: "px-lg-5 px-1 text-start mt-2",
                            children: [Object(Y.jsx)("h2", {
                                children: "Come forward towards a better tomorrow!"
                            }), Object(Y.jsxs)("p", {
                                children: ["Enroll yourself now in this city\u2019s biggest educational event \u2013 ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " Turn your future upside down and become the hope of tomorrow for your family. We offer various courses ranging from digital marketing, IT fields, advertising, computer sciences, data sciences, filming, designing, software, project management, marketing, and much more. Education shouldn\u2019t be a barrier to your bright futures anymore. ", Object(Y.jsx)("b", {
                                    children: "Bano Qabil!"
                                }), " does not only promise FREE education but guaranteed job placements and internships as well! Fill up the enrollment form now to start the journey! Join us on the 3rd of July for an Aptitude test and begin your tomorrow! Let\u2019s take a quick look at our multiple programs."]
                            })]
                        })]
                    })]
                }), Object(Y.jsx)(X, {})]
            })
        }
        var we = function() {
            return Object(Y.jsxs)("div", {
                className: "App",
                style: {
                    minHeight: "100%"
                },
                children: [Object(Y.jsx)(i.a, {
                    children: Object(Y.jsxs)(l.d, {
                        children: [Object(Y.jsx)(l.b, {
                            path: "/",
                            element: Object(Y.jsx)(Z, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "login",
                            element: Object(Y.jsx)(_, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "signup",
                            element: Object(Y.jsx)(ee, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "success",
                            element: Object(Y.jsx)(Oe, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "career-reg/:id",
                            element: Object(Y.jsx)(ee, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "submit-result",
                            element: Object(Y.jsx)(me, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "submit-result-new",
                            element: Object(Y.jsx)(fe, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "result",
                            element: Object(Y.jsx)(ge, {})
                        }), Object(Y.jsx)(l.b, {
                            path: "reg-form",
                            element: Object(Y.jsx)(ye, {})
                        })]
                    })
                }), Object(Y.jsx)(o.a, {})]
            })
        }
          , ke = r(67)
          , Ae = r(81)
          , Ce = r(452)
          , Ne = r.n(Ce)
          , Se = r(453)
          , Fe = r.n(Se);
        function De() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return new Promise((function(t) {
                return setTimeout((function() {
                    return t({
                        data: e
                    })
                }
                ), 500)
            }
            ))
        }
        var Be = Object(O.createAsyncThunk)("counter/fetchCount", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            De(t);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Re = Object(O.createSlice)({
            name: "counter",
            initialState: {
                value: 0,
                status: "idle"
            },
            reducers: {
                increment: function(e) {
                    e.value += 1
                },
                decrement: function(e) {
                    e.value -= 1
                },
                incrementByAmount: function(e, t) {
                    e.value += t.payload
                }
            },
            extraReducers: function(e) {
                e.addCase(Be.pending, (function(e) {
                    e.status = "loading"
                }
                )).addCase(Be.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.value += t.payload
                }
                ))
            }
        })
          , Ee = Re.actions
          , Pe = (Ee.increment,
        Ee.decrement,
        Ee.incrementByAmount,
        Re.reducer);
        function Me(e, t) {
            return x.postApi("child/newprofile", t, e)
        }
        function Te(e, t) {
            return x.postApi("donor/link/child", t, e)
        }
        function Ie(e, t) {
            return x.postApi("donor/delink/child", t, e)
        }
        var Le = Object(O.createAsyncThunk)("childProfile/newprofile", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Me(t.formData, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , We = Object(O.createAsyncThunk)("childProfile/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.formData,
                            a = t.token,
                            x.getApi("child/list", a, {});
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Ue = Object(O.createAsyncThunk)("childProfile/list/available", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a = t.token,
                            x.getApi("child/list", a, {
                                isLinked: 0
                            });
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    var a
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Qe = Object(O.createAsyncThunk)("childProfile/linkdonor", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Te(t.formData, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , ze = Object(O.createAsyncThunk)("childProfile/delinkdonor", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Ie(t.formData, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Ge = Object(O.createSlice)({
            name: "childProfile",
            initialState: {
                profileData: {},
                profile: [],
                unAssignedList: [],
                status: "idle",
                screenMode: "list"
            },
            extraReducers: function(e) {
                e.addCase(Le.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Le.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message)
                }
                )).addCase(We.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(We.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.profile = t.payload.list
                }
                )).addCase(Ue.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Ue.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.unAssignedList = t.payload.list
                }
                )).addCase(Qe.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Qe.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message)
                }
                )).addCase(ze.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(ze.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message)
                }
                ))
            }
        })
          , Ve = (Ge.actions.changeScreen,
        Ge.reducer);
        function He(e, t) {
            return x.postApi("donor/newprofile", t, e)
        }
        function qe(e, t) {
            return x.getApi("donor/list", t, e)
        }
        function Ye(e, t) {
            return x.getApi("donor/link/list", t, e)
        }
        function Je(e, t) {
            return x.getApi("donor/details", t, e)
        }
        var Ke = Object(O.createAsyncThunk)("DonorProfile/newprofile", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            He(t.formData, t.token);
                        case 2:
                            return r = e.sent,
                            t.callback(),
                            e.abrupt("return", r.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Xe = Object(O.createAsyncThunk)("DonorProfile/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            qe(t.formData, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , Ze = Object(O.createAsyncThunk)("DonorProfile/linked/list", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Ye(t.params, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , _e = Object(O.createAsyncThunk)("DonorProfile/details", function() {
            var e = Object(p.a)(h.a.mark((function e(t) {
                var r;
                return h.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Je(t.params, t.token);
                        case 2:
                            return r = e.sent,
                            e.abrupt("return", r.data);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
          , $e = Object(O.createSlice)({
            name: "DonorProfile",
            initialState: {
                profileData: {},
                profile: [],
                linkedChild: [],
                status: "idle",
                screenMode: "list"
            },
            reducers: {
                changeScreen: function(e, t) {
                    e.screenMode = t.payload
                },
                openDetails: function(e, t) {
                    e.profileData = t.payload,
                    e.screenMode = "details"
                }
            },
            extraReducers: function(e) {
                e.addCase(Ke.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Ke.fulfilled, (function(e, t) {
                    e.status = "idle",
                    o.b.success(t.payload.message),
                    e.screenMode = "list"
                }
                )).addCase(Xe.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Xe.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.profile = t.payload.list
                }
                )).addCase(Ze.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(Ze.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.linkedChild = t.payload.list
                }
                )).addCase(_e.pending, (function(e, t) {
                    e.status = "loading"
                }
                )).addCase(_e.fulfilled, (function(e, t) {
                    e.status = "idle",
                    e.profileData = t.payload
                }
                ))
            }
        })
          , et = $e.actions
          , tt = (et.changeScreen,
        et.openDetails,
        $e.reducer)
          , rt = {
            key: "root",
            storage: Ne.a,
            stateReconciler: Fe.a
        }
          , at = Object(ke.d)({
            count: Pe,
            authentication: G,
            childProfile: Ve,
            donorProfile: tt,
            adServ: oe,
            blog: pe
        })
          , nt = Object(Ae.persistReducer)(rt, at)
          , ct = Object(O.configureStore)({
            reducer: nt,
            middleware: Object(O.getDefaultMiddleware)({
                serializableCheck: {
                    ignoredActions: [Ae.FLUSH, Ae.REHYDRATE, Ae.PAUSE, Ae.PERSIST, Ae.PURGE, Ae.REGISTER]
                }
            })
        })
          , st = Object(Ae.persistStore)(ct);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var ot = r(454);
        r(912);
        s.a.render(Object(Y.jsx)(n.a.StrictMode, {
            children: Object(Y.jsx)(d.a, {
                store: ct,
                children: Object(Y.jsx)(ot.PersistGate, {
                    loading: null,
                    persistor: st,
                    children: Object(Y.jsx)(we, {})
                })
            })
        }), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        ))
    }
}, [[913, 1, 2]]]);
//# sourceMappingURL=main.945881c6.chunk.js.map
