# SportShoeEcommerceApp
Hướng dẫn cài đặt và chạy 1 chương trình trong React-Native: 
1. Cách thức download và install Android Studio về máy :
  - download android về máy theo link sau : https://developer.android.com/studio
  - Để cài đặt Android Studio trên Windows, hãy tiến hành như sau:
    +Nếu bạn đã tải một tệp .exe xuống (khuyên dùng), hãy nhấp đúp để mở tệp đó.
    +Nếu bạn đã tải tệp .zip xuống, hãy giải nén tệp ZIP, sao chép thư mục android-studio vào thư mục Program Files (Tệp chương trình), sau đó mở thư mục android-studio > bin rồi chạy studio64.exe (dành cho máy 64 bit) hoặc studio.exe (dành cho máy 32 bit).
    +Làm theo trình hướng dẫn thiết lập trong Android Studio và cài đặt mọi gói SDK mà trình này đề xuất.
  -Để cài đặt Android Studio trên Linux, hãy tiến hành như sau:
    +Giải nén tệp .zip mà bạn đã tải xuống tại một vị trí phù hợp cho các ứng dụng, chẳng hạn như trong /usr/local/ cho hồ sơ người dùng của chính bạn hoặc /opt/ cho người dùng dùng chung.
    +Nếu bạn đang sử dụng phiên bản Linux 64 bit, hãy đảm bảo rằng bạn đã cài đặt trước các thư viện mà máy 64 bit cần có.
    +Để chạy Android Studio, hãy mở một cửa sổ dòng lệnh, chuyển đến thư mục android-studio/bin/ rồi thực thi studio.sh.
    +Chọn xem bạn có muốn nhập các chế độ cài đặt trước đây của Android Studio vào không, rồi nhấp vào OK.
    +Trình hướng dẫn thiết lập Android Studio (Android Studio Setup Wizard) sẽ chỉ dẫn bạn hoàn thành toàn bộ quá trình thiết lập, bao gồm cả thao tác tải các thành phần SDK Android cần thiết cho quá trình phát triển ứng dụng.
  *Thư viện mà máy 64 bit cần có 
    +Nếu đang chạy phiên bản Ubuntu 64 bit, bạn cần cài đặt một số thư viện 32 bit bằng lệnh sau đây:
      $sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386

    +Nếu bạn đang chạy hệ điều hành Fedora 64 bit, lệnh sẽ là:
      $sudo yum install zlib.i686 ncurses-libs.i686 bzip2-libs.i686

2. Cài đặt rect-native và máy điện thoại ảo để chạy chương trình
  -Đầu tiên, hãy vào đường link sau để tìm hiểu về rect-native : https://reactnative.dev/docs
  -Sau đó , click vào phần "setting up the development enviroment" trong phần enviroment setup để tìm hiểu phần cài đặt môi trường :
I.Windown
   -Sau khi đã hoàn tất phân download và intstall Android studio thì mở Adroid studio lên. Trong khi sử dụng trình hướng dẫn cài đặt Android Studio, hãy đảm bảo rằng các hộp bên cạnh tất cả các mục sau được chọn:
      +Android SDK
      +Android SDK Platform
      +Android Virtual Device
  -Sau đó , click vào nủt "Next" để hoant thành phần cài đặt này
  -Cài đăt android SDK:
    *Có thể  install Android SDK thông qua SDK Manager trong Android Studio bằng cách:
      B1: Mở Android Studio, click vào nút "Configure" và chọn "SDK manager"
      B2:Chọn tab "Nền tảng SDK" từ trong Trình quản lý SDK, sau đó chọn hộp bên cạnh "Hiển thị chi tiết gói" ở góc dưới cùng bên phải. Tìm kiếm và mở rộng Android 11 (R)mục nhập, sau đó đảm bảo rằng các mục sau được chọn:
        +Android SDK Platform 30
        +Intel x86 Atom_64 System ImagehoặcGoogle APIs Intel x86 Atom System Image
      B3: Chọn "SDK Platforms" từ trong phần SDK Manager , sau đó kiểm tra box bên cạnh phần "Show Package Detail". Tìm kiếm và mở rộng  "Android SDK Build-Tools" và hãy đảm bảo rằng phiên bản 30.0.2 đã được chọn.
      B4: Cuối cùng hãy click vào "Apply" để tải xuống và cài đặt Android SDK và các công cụ xây dựng liên quan.
  -Cấu hình biến môi trường ANDROID_HOME:
    *Các công cụ React Native yêu cầu thiết lập một số biến môi trường để tạo ứng dụng với mã gốc.
      B1 : Mở Windows Control Panel.
      B2 : Nhấp vào User Accounts, sau đó nhấp lại vào User Accounts
      B3 : Nhấp vào Change my environment variables
      B4 : Nhấp vào New...  để tạo ANDROID_HOME biến người dùng mới trỏ đến đường dẫn đến Android SDK của bạn
    + SDK đã được cài đặt theo mặc định tại vị trí : %LOCALAPPDATA%\Android\Sdk
    +Bạn có thể tìm thấy vị trí thực của SDK trong phần "Setting" của Android Studio bên dưới Appearance & Behavior → System Settings → Android SDK.
    +Mở new Command Prompt window để đảm bảo biến môi trường mới được tải trước khi tiếp tục bước tiếp theo:
      1)Open powershell
      2)Copy and paste Get-ChildItem -Path Env:\ into powershell
      3)Verify ANDROID_HOME has been added
3.Thêm flatform-tool to Path: 
      B1 : Open the Windows Control Panel.
      B2 : Click on User Accounts, then click User Accounts again
      B3 : Click on Change my environment variables
      B4 :Select the Path variable.
      B5 : Click Edit.
      B6 : Click New and add the path to platform-tools to the list.
     +Vị trí mặc định cho folder là ở : %LOCALAPPDATA%\Android\Sdk\platform-tools
  II.Linux
 1.Cài dặt Android-Studio
  -Sau khi đã hoàn tất phân download và intstall Android studio thì mở Adroid studio lên. Trong khi sử dụng trình hướng dẫn cài đặt Android Studio, hãy đảm bảo rằng các hộp bên cạnh tất cả các mục sau được chọn:
      +Android SDK
      +Android SDK Platform
      +Android Virtual Device
  -Sau đó , click vào nủt "Next" để hoant thành phần cài đặt này
  -Cài đăt android SDK:
    *Có thể  install Android SDK thông qua SDK Manager trong Android Studio bằng cách:
      B1: Mở Android Studio, click vào nút "Configure" và chọn "SDK manager"
      B2:Chọn tab "Nền tảng SDK" từ trong Trình quản lý SDK, sau đó chọn hộp bên cạnh "Hiển thị chi tiết gói" ở góc dưới cùng bên phải. Tìm kiếm và mở rộng Android 11 (R)mục nhập, sau đó đảm bảo rằng các mục sau được chọn:
        +Android SDK Platform 30
        +Intel x86 Atom_64 System ImagehoặcGoogle APIs Intel x86 Atom System Image
      B3: Chọn "SDK Platforms" từ trong phần SDK Manager , sau đó kiểm tra box bên cạnh phần "Show Package Detail". Tìm kiếm và mở rộng  "Android SDK Build-Tools" và hãy đảm bảo rằng phiên bản 30.0.2 đã được chọn.
      B4: Cuối cùng hãy click vào "Apply" để tải xuống và cài đặt Android SDK và các công cụ xây dựng liên quan.
  -Cấu hình biến môi trường ANDROID_SDK_ROOT:
  -Các công cụ React Native yêu cầu thiết lập một số biến môi trường để tạo ứng dụng với mã gốc.
    B1: Thêm các dòng sau vào tệp cấu hình $HOME/.bash_profilehoặc $HOME/.bashrc(nếu bạn đang sử dụng zshthen ~/.zprofilehoặc ):~/.zshrc:
      +export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
      +export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
      +export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
    B2: Nhập source $HOME/.bash_profilecho bashhoặc source $HOME/.zprofileđể tải cấu hình vào trình bao hiện tại của bạn. Xác minh rằng ANDROID_SDK_ROOT đã được thiết lập bằng cách chạy echo $ANDROID_SDK_ROOTvà các thư mục thích hợp đã được thêm vào đường dẫn của bạn bằng cách chạy echo $PATH
 4.Giao diện dòng lệnh React-Native:
    -Tạo một ứng dụng mới:
    *React Native có một giao diện dòng lệnh tích hợp, bạn có thể sử dụng giao diện này để tạo một dự án mới. Bạn có thể truy cập nó mà không cần cài đặt bất kỳ thứ gì bằng npx Node.js. Hãy tạo một dự án React Native mới có tên là "AwesomeProject":
      +Với câu lệnh : npx react-native init AwesomeProject bạn sẽ khởi tạo nên một project React 
    *[Tùy chọn] Sử dụng phiên bản hoặc mẫu cụ thể
     +Nếu bạn muốn bắt đầu một dự án mới với một phiên bản React Native cụ thể, bạn có thể sử dụng --version đối số : npx react-native init AwesomeProject --version X.XX.X
     +Bạn cũng có thể bắt đầu một dự án với mẫu React Native tùy chỉnh, như TypeScript, với --templateđối số : npx react-native init AwesomeTSProject --template react-native-template-typescript
    *Chuẩn bị thiết bị Android
     +Bạn sẽ cần một thiết bị Android để chạy ứng dụng React Native Android của mình. Đây có thể là thiết bị Android thực hoặc thông thường hơn, bạn có thể sử dụng Thiết bị ảo Android cho phép bạn giả lập thiết bị Android trên máy tính của mình.
     +Dù bằng cách nào, bạn sẽ cần chuẩn bị thiết bị để chạy các ứng dụng Android để phát triển.
    *Sử dụng thiết bị ảo
     +Nếu bạn sử dụng Android Studio để mở ./AwesomeProject/android, bạn có thể xem danh sách các Thiết bị ảo Android (AVD) hiện có bằng cách mở "AVD Manager" từ bên trong Android Studio
     +Nếu gần đây bạn đã cài đặt Android Studio, bạn có thể sẽ cần tạo một AVD mới . Chọn " create a new AVD ...", sau đó chọn bất kỳ Điện thoại nào từ danh sách và nhấp vào "Next", sau đó chọn Q API Level 30 image.
     +Nhấp vào "Next" rồi "Finish" để tạo AVD của bạn. Tại thời điểm này, bạn có thể nhấp vào nút hình tam giác màu xanh lá cây bên cạnh AVD của bạn để khởi chạy nó, sau đó tiến hành bước tiếp theo.
 5.Chạy một ứng dụng trên Rect-Native:
    B1: Start Metro:
     -Để bắt đầu Metro, hãy chạy npx react-native startbên trong thư mục dự án React Native của bạn: npx react-native start
      +react-native start để khởi động Metro Bundle.
    B2:Start your application
      -Hãy để Metro Bundler chạy trong terminal của chính nó. Mở một thiết bị đầu cuối mới bên trong thư mục dự án React Native của bạn: npx react-native run-android
      -Nếu mọi thứ được thiết lập chính xác, bạn sẽ sớm thấy ứng dụng mới của mình chạy trong trình giả lập Android.
        +npx react-native run-androidlà một cách để chạy ứng dụng của bạn - bạn cũng có thể chạy ứng dụng trực tiếp từ bên trong Android Studio.
 
  
      
