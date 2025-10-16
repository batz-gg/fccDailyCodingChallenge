Имэйл баталгаажуулагч 

Өгөгдсөн мөр нь дараах хязгаарлалтыг ашиглан энэ нь хүчинтэй имэйл хаяг мөн эсэхийг тодорхойлно уу: 
Энэ нь яг нэг @ тэмдэг агуулсан байх ёстой. 
Орон нутгийн хэсэг (@-ийн өмнө): Зөвхөн үсэг (a-z, A-Z), цифр (0-9), цэг (.), доогуур зураас (_), зураас (-) агуулж болно. 
Цэгээр эхэлж эсвэл төгсөх боломжгүй. 
Домэйн хэсэг (@-ийн дараа): Дор хаяж нэг цэг агуулсан байх ёстой. 
Доод тал нь хоёр үсгээр төгссөн цэг байх ёстой. 
Локал эсвэл домэйн хэсэг нь дараалсан хоёр цэгтэй байж болохгүй.

Tests
Passed:1. validate("a@b.cd") should return true.
Passed:2. validate("hell.-w.rld@example.com") should return true.
Passed:3. validate(".b@sh.rc") should return false.
Passed:4. validate("example@test.c0") should return false.
Passed:5. validate("freecodecamp.org") should return false.
Passed:6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.
Passed:7. validate("hello.@wo.rld") should return false.
Passed:8. validate("hello@world..com") should return false.
Passed:9. validate("git@commit@push.io") should return false.