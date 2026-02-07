// @ppm-prototype--static-content

window.MAIN_CONTENT = {
  "VERSION" : 10, 
  "UNDER_CONSTRUCTION": false,
  "ENABLE_EDITOR": false,
  "ROADMAP_HIDE_RELATED_KEYWORDS": true,
  "ROADMAP_HIDE_SOCIALS_ON_PROFILE": true,
  "HIDE_CONTACT_ON_PUBLIC_PROFILE": true,
  "HIDE_LANDING_VIDEO_SECTION": false,
  "URL_REWRITING": true,
  "DEFAULT_LANGUAGE": "vn",
  "CONTENT" : {
 
    global: {
      headerContent: {
        logoImage: 'https://ik.imagekit.io/dloitl7fd8/image%2015.png?updatedAt=1767830765297',
        logoVietnamese: 'VIỆN PHẬT HỌC',
        logoEnglish: 'Sakya Buddha University',
        navigationItems: [
          { id: 'about', label: 'Về SBU', href: '/page2', isDropdown: false },
          {
            id: 'programs',
            label: 'Chương trình Đào tạo',
            href: '#',
            isDropdown: true,
            dropdownItems: [
              { id: 'program1', label: 'Sơ trung đẳng Phật học', href: '/page4' },
              { id: 'program2', label: 'Cao đẳng Phật học', href: '/page5' },
              { id: 'program3', label: 'Chuyên khoa A tỳ đàm', href: '/page6' }
            ]
          },
          { id: 'dharma', label: 'Hộ trì Chánh pháp', href: '/#HỘ-TRÌ-CHÁNH-PHÁP', isDropdown: false },
          { id: 'meditation', label: 'Chương trình Thiền SBU', href: '/page3', isDropdown: false },
          { id: 'library', label: 'Thư viện', href: '/page3/#GHI-DANH-THIỀN', isDropdown: false }
        ]
      },
      footerContent: {
        titleDesktop: "VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC",
        titleMobile: "VIỆN PHẬT HỌC\nBỒ ĐỀ PHẬT QUỐC",
        backgroundImage: "https://ik.imagekit.io/dloitl7fd8/ChatGPT%20Image%20Jan%209,%202026,%2004_37_51%20PM.png",
        logoImage: "https://ik.imagekit.io/dloitl7fd8/image%2015.png?updatedAt=1767960134367",
        logoAlt: "Sakya Buddha University",
        contact: {
          title: "Thông tin Liên hệ",
          address: "3404 Westminster Ave.\nSanta Ana, CA 92703\nUnited States",
          phone: "+1-714-328-6087",
          email: "sakyaubuddha@vienphathoc.org"
        },
        quickLinks: {
          title: "Liên Kết Nhanh",
          items: [
            { id: "ql-1", label: "Sổ tay Sinh viên SBU" },
            { id: "ql-2", label: "Ghi danh nhập học", href: "/page2/#GHI-DANH-NHẬP-HỌC" },
            { id: "ql-3", label: "Ghi danh thiền", href: "/page3/#GHI-DANH-THIỀN" }
          ]
        },
        social: {
          title: "Kết nối với chúng tôi",
          youtube: "https://www.youtube.com/hashtag/sakyabuddhauniversity",
          facebook: "https://www.facebook.com/sakyabuddhauniversity/"
        },
        copyright: "Viện Phật Học Bồ Đề Phật Quốc. All rights reserved.",
        creditText: "Website by",
        creditLabel: "MTC",
        creditLink: "https://makethemcall.me/"
      }
    },
    pages: {
      home: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'VIỆN PHẬT HỌC\nBỒ ĐỀ PHẬT QUỐC',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/La%20bo%20de%201%20(2).png?updatedAt=1766054379563',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/La%20bo%20de%201%20(2).png?updatedAt=1766054379563',
          published: true
        },
        newsContent: {
          sectionTitle: 'Thông báo mới',
          items: [
            {
              id: 'news-1',
              title: 'Lễ Khai giảng năm học mới 2024-2025!!!',
              subtitle: 'Trường sẽ tổ chức Lễ Khai giảng vào ngày 15 tháng 9 năm 2024 tại giảng đường chính.',
              date: '15/09/2024',
              category: 'Sự kiện',
              image: 'https://ik.imagekit.io/dloitl7fd8/image%2017.png?updatedAt=1767830765354',
              isFeatured: true
            },
            {
              id: 'news-2',
              title: 'Tuyển sinh chương trình Thạc sĩ Phật học',
              subtitle: 'Nhận hồ sơ từ ngày 01/10/2024 đến 30/11/2024. Ưu tiên ứng viên có kinh nghiệm tu tập.',
              date: '01/10/2024',
              category: 'Tuyển sinh',
              image: '',
              isFeatured: false
            },
            {
              id: 'news-3',
              title: 'Khóa tu mùa hè cho sinh viên',
              subtitle: 'Đăng ký tham gia khóa tu 7 ngày tại thiền viện từ 10-17/07/2024.',
              date: '10/07/2024',
              category: 'Khóa tu',
              image: '',
              isFeatured: false
            },
            {
              id: 'news-4',
              title: 'Hội thảo quốc tế về Phật giáo Đại thừa',
              subtitle: 'Diễn giả: GS. Robert Thurman, Thiền sư Thích Nhất Hạnh, và các học giả hàng đầu.',
              date: '20/08/2024',
              category: 'Hội thảo',
              image: '',
              isFeatured: false
            }
          ]
        },
        programsContent: {
          items: [
            {
              id: 'prog-1',
              title: "SƠ TRUNG ĐẲNG PHẬT HỌC",
              description: "Chương trình căn bản về Phật học dành cho người mới bắt đầu",
              links: [
                { label: "Chương trình học và thời khóa biểu ›", href: "#" },
                { label: "Niên khóa 2025 – 2028 ›", href: "#" },
                { label: "Niên khóa 2022 – 2025 ›", href: "#" },
                { label: "Niên khóa 2019 – 2022 ›", href: "#" }
              ],
              lectures: [
                {
                  id: 'lect-1-1',
                  title: "Nhập môn Triết học Phật giáo",
                  subtitle: "Tìm hiểu cơ bản về tư tưởng Phật giáo",
                  instructor: "HT. Thích Minh Thành",
                  image: "",
                  link: "#"
                },
                {
                  id: 'lect-1-2',
                  title: "Lịch sử Đức Phật Thích Ca",
                  subtitle: "Cuộc đời và hành trình giác ngộ của Đức Phật",
                  instructor: "GS. Nguyễn Văn Tâm",
                  image: "",
                  link: "#"
                }
              ],
              imageUrl: "https://ik.imagekit.io/dloitl7fd8/mobilrimage?updatedAt=1766059412215"
            },
            {
              id: 'prog-2',
              title: "CAO ĐẲNG PHẬT HỌC",
              description: "Nâng cao kiến thức Phật học cho học viên có nền tảng",
              links: [
                { label: "Chương trình học và thời khóa biểu ›", href: "#" },
                { label: "Niên khóa 2025 – 2028 ›", href: "#" },
                { label: "Niên khóa 2022 – 2025 ›", href: "#" }
              ],
              lectures: [
                {
                  id: 'lect-2-1',
                  title: "Kinh Trung Bộ - Phần I",
                  subtitle: "Nghiên cứu chuyên sâu về các bài kinh cơ bản",
                  instructor: "HT. Thích Nhật Từ",
                  image: "",
                  link: "#"
                },
                {
                  id: 'lect-2-2',
                  title: "Luận giải Duy Thức Học",
                  subtitle: "Tìm hiểu về tâm thức trong Phật giáo Đại thừa",
                  instructor: "TT. Thích Tuệ Sỹ",
                  image: "",
                  link: "#"
                }
              ],
              imageUrl: "https://ik.imagekit.io/dloitl7fd8/bode54%201.png?updatedAt=1766059990836"
            },
            {
              id: 'prog-3',
              title: "CHUYÊN KHOA A TỲ ĐÀM",
              description: "Chương trình chuyên sâu về Luận tạng và Vi diệu pháp",
              links: [
                { label: "Chương trình học và thời khóa biểu ›", href: "#" },
                { label: "Niên khóa 2025 – 2028 ›", href: "#" }
              ],
              lectures: [
                {
                  id: 'lect-3-1',
                  title: "Vi Diệu Pháp Tạng - Phần I",
                  subtitle: "Nghiên cứu về tâm, tâm sở và sắc pháp",
                  instructor: "HT. Thích Chơn Thiện",
                  image: "",
                  link: "#"
                },
                {
                  id: 'lect-3-2',
                  title: "Pháp Tụ và Phân Tích Đạo",
                  subtitle: "Hệ thống phân loại và giải thích các pháp",
                  instructor: "GS. Lê Mạnh Thát",
                  image: "",
                  link: "#"
                }
              ],
              imageUrl: "https://ik.imagekit.io/dloitl7fd8/image%206%20(1).png?updatedAt=1766060435339"
            }
          ]
        },
        supportContent: {
          sectionTitle: "HỘ TRÌ\nCHÁNH PHÁP",
          backgroundImage: "https://ik.imagekit.io/dloitl7fd8/image%2019.png",
          mobileBackgroundImage: "https://ik.imagekit.io/dloitl7fd8/bode47%201.png",
          columns: [
            {
              id: "tv",
              title: "BỒ ĐỀ PHẬT QUỐC TV 57.15",
              items: [
                {
                  id: "tv-1",
                  title: "Title",
                  image: ""
                },
                {
                  id: "tv-2",
                  title: "Title",
                  image: ""
                }
              ]
            },
            {
              id: "music",
              title: "PHÁP NHẠC ÂM",
              items: [
                {
                  id: "music-1",
                  title: "Title",
                  image: ""
                },
                {
                  id: "music-2",
                  title: "Title",
                  image: ""
                }
              ]
            },
            {
              id: "support",
              title: "HỘ TRÌ CHÁNH PHÁP",
              items: [
                {
                  id: "support-1",
                  title: "Title",
                  image: ""
                },
                {
                  id: "support-2",
                  title: "Title",
                  image: ""
                }
              ]
            }
          ]
        },
        scriptureContent: {
          sectionTitle: "KINH, LUẬT, LUẬN\nGIẢNG GIẢI",
          backgroundImage: "https://ik.imagekit.io/dloitl7fd8/image%2018.png",
          cards: [
  
            {
              id: "card-1",
              title: "KINH ĐIỂN ĐẠI THỪA",
              groups: [
                {
                  id: "g-1",
                  items: [
                    { id: "i-1", label: "Kinh Thủ Lăng Nghiêm ›" },
                    { id: "i-2", label: "Kinh Pháp Hoa ›" },
                    { id: "i-3", label: "Kinh Đại Bát Niết Bàn ›" },
                    { id: "i-4", label: "Kinh Kim Cang ›" },
                    { id: "i-5", label: "Kinh Diệu Tạng ›" },
                    { id: "i-6", label: "Kinh Dược Sư ›" },
                    { id: "i-7", label: "Kinh Đại Bi Tâm Đà La Ni ›" },
                    { id: "i-8", label: "Giải nghĩa Đại Bi Thập Chú ›" }
                  ]
                },
                {
                  id: "g-2",
                  title: "CĂN TỨ – TRUNG ẤM\n-TÁI SANH",
                  items: [
                    { id: "i-9", label: "Căn tứ – Trung ấm – Tái sanh ›" }
                  ]
                }
              ]
            },
            {
              id: "card-2",
              title: "KINH TẠNG NGUYÊN THỦY",
              groups: [
                {
                  id: "g-3",
                  items: [
                    { id: "i-10", label: "Kinh Tăng Nhất A Hàm ›" },
                    { id: "i-11", label: "Kinh Tạp A Hàm ›" },
                    { id: "i-12", label: "Kinh Trường Bộ ›" },
                    { id: "i-13", label: "Kinh Trung Bộ ›" }
                  ]
                },
                {
                  id: "g-4",
                  title: "GIÁO NGHĨA TỊNH ĐỘ",
                  items: [
                    { id: "i-14", label: "Kinh Vô Lượng Thọ ›" },
                    { id: "i-15", label: "Kinh Quán Vô Lượng Thọ ›" },
                    { id: "i-16", label: "Kinh Niệm Phật Ba La Mật ›" },
                    { id: "i-17", label: "Kinh Phật Thuyết A Di Đà ›" },
                    { id: "i-18", label: "Yếu nghĩa Kinh Di Đà ›" }
                  ]
                }
              ]
            },
            {
              id: "card-3",
              title: "LUẬN TẠNG",
              groups: [
                {
                  id: "g-5",
                  items: [
                    { id: "i-19", label: "Bổ sung kiến thức Phật Pháp ›" },
                    { id: "i-20", label: "Pháp Uẩn Túc Luận ›" }
                  ]
                },
                {
                  id: "g-6",
                  title: "LUẬN TẠNG",
                  items: [
                    { id: "i-21", label: "Duy Già Bồ Tát Giới ›" },
                    { id: "i-22", label: "Thanh Giới Như Lai ›" },
                    { id: "i-23", label: "Xuất gia – Thọ giới ›" }
                  ]
                },
                {
                  id: "g-7",
                  title: "SÁM PHÁP",
                  items: [
                    { id: "i-24", label: "Dược Sư Sám Pháp ›" },
                    { id: "i-25", label: "Lương Hoàng Sám ›" },
                    { id: "i-26", label: "Từ Bi Thủy Sám ›" }
                  ]
                }
              ]
            }
          ]
        }
      },
      page2: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'Về SBU',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/Desktop%20-%202.png',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%2010%20(1).png?updatedAt=1766747290182',
          published: true
        },
        loiTuBachContent: {
          title: "Lời Tự Bạch",
          greeting: "Kính thưa chư liệt vị,",
  
          image: {
            src: "https://ik.imagekit.io/dloitl7fd8/image%2023.png",
            alt: "Hòa thượng Thích Giác Chánh"
          },
  
          paragraphs: [
            "Cộng đồng Phật giáo Việt Nam hình thành tại Hoa Kỳ đã hơn 40 năm với những sinh hoạt văn hóa Phật giáo rất phong phú đa dạng nhưng lại chưa có một chương trình giáo dục để hướng dẫn cho người có nhu cầu tìm hiểu và nghiên cứu Phật học.",
  
            "Vì muốn tạo điều kiện thuận lợi cho những người bước đầu phát tâm học Phật và những ai muốn nâng cao kiến thức Phật học hơn nữa, nên Viện Phật Học Bồ Đề Phật Quốc tổ chức Khóa học với hai chương trình: Sơ Trung Đẳng Phật học và Cao Đẳng Phật Học trong thời gian 3 năm, mỗi năm 46 tuần vào các ngày thứ 2, 4, 6 từ 7:00pm – 9:00pm và Thứ 7 từ 3:00pm – 6:00pm.",
  
            "Với giáo trình gồm hai hệ thống Nam và Bắc truyền cùng 12 vị Tăng Ni giáo thọ giàu kinh nghiệm giảng dạy, chúng tôi tin rằng Khóa học sẽ mang đến hạnh phúc và phước báo to lớn cho quý vị. Trong tương lai, chúng tôi còn hướng đến xây dựng một hệ thống giáo dục với chương trình được Bộ giáo dục Hoa Kỳ chấp nhận. Do đó, chúng tôi tất mong quý vị lưu tâm để cho Phật sự lợi lạc quần sanh này sớm thành tựu viên mãn."
          ],
  
          closing: "Trân trọng kính chúc quý vị nhiều an vui.",
  
          signature: {
            date: "California, ngày 15 tháng 01 năm 2013",
            organization: "Thay mặt Ban Giám Viện",
            role: "Chánh bạch",
            name: "Thích Giác Chánh"
          }
        },
        bonDaiTongChiContent: {
          title: "BỐN ĐẠI TÔNG CHỈ",
          subtitle: "Bốn đại tông chỉ của Bồ Đề Phật Quốc",
          backgroundImage: "https://ik.imagekit.io/dloitl7fd8/enhan.png",
          mobileBackgroundImage: "https://ik.imagekit.io/dloitl7fd8/2Professional%20fine%20art%20photograph%20front%20view%20of%20a%20Buddha%20statue%20meditating%20at%20sunset.%20%20Warm,%20soft%20light%20with%20subtle%20darkness%20creates%20a%20mystical,%20enchanting,%20dreamlike%20atmosphere.%20Gentle%20color%20contrasts%20e%20(2).png?updatedAt=1766748838387",
          items: [
            {
              id: 1,
              title: "Thân cận hiền sĩ",
              description: "Gần gũi với những người hiền đức",
              icon: "handshake"
            },
            {
              id: 2,
              title: "Lắng nghe chánh pháp",
              description: "Chú tâm lắng nghe giáo pháp chân chính",
              icon: "ear"
            },
            {
              id: 3,
              title: "Như lý tác ý",
              description: "Suy nghĩ theo đúng lý pháp",
              icon: "brain"
            },
            {
              id: 4,
              title: "Pháp tuỳ pháp hành",
              description: "Thực hành theo đúng giáo pháp",
              icon: "pray"
            }
          ]
        },
        banNhanSuContent: {
          desktopBackground:
            "https://ik.imagekit.io/dloitl7fd8/image%2024.png",
  
          groups: [
            {
              id: "giam-vien",
              title: "BAN GIÁM VIỆN",
              mobileBackground:
                "https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%2011.png",
              members: [
                "Giám viện: Thượng tọa Thích Huyền Châu",
                "Phó giám viện: Thượng tọa Thích Nguyên Nguyên",
                "Phó giám viện: Thượng tọa Thích Nguyên Định"
              ]
            },
            {
              id: "giao-tho",
              title: "BAN GIÁO THỌ",
              mobileBackground:
                "https://ik.imagekit.io/dloitl7fd8/imgebuthist",
              members: [
                "TT. Thích Huyền Châu",
                "Thượng tọa Thích Nguyên Nguyện",
                "Thượng tọa Thích Nguyên Định",
                "Đại Đức Thích Hoằng Nhứt",
                "Đại Đức Thích Minh Lợi",
                "Đại Đức Trí Quang",
                "Ni sư Thích Nữ Tâm Nhựt"
              ]
            }
          ]
        },
        ghiDanhNhapHocContent: {
          title: "GHI DANH NHẬP HỌC",
          desktopImage: "https://ik.imagekit.io/dloitl7fd8/image%2025.png",
  
          fields: {
            fullName: {
              label: "Tên tên",
              placeholder: "Nhập tên của bạn"
            },
            dharmaName: {
              label: "Pháp danh",
              placeholder: "Nhập Pháp danh của bạn"
            },
            birthDate: {
              label: "Ngày, tháng, năm sinh",
              placeholder: "dd/mm/yyyy"
            },
            gender: {
              label: "Giới tính",
              male: "Nam",
              female: "Nữ"
            },
            email: {
              label: "Email",
              placeholder: "abcde@gmail.com"
            },
            phone: {
              label: "Điện thoại",
              placeholder: "123 xxx xxx xxx"
            },
            program: {
              label: "Chương trình ghi danh",
              options: [
                { id: "p1", label: "Sơ trung đẳng Phật học" }
              ]
            },
            attendance: {
              label: "Hình thức tham dự",
              options: [
                { id: "a1", label: "Học tại lớp" }
              ]
            }
          },
  
          submitLabel: "GHI DANH NGAY"
        }
  
  
  
  
  
      },
      page3: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'KHÔNG GIAN THIỀN',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/Desktop%20-%201.png',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%2010.png?updatedAt=1766086121870',
          published: true
        },
        khongGianThienContent: {
          title: "KHÔNG GIAN THIỀN",
  
          image: {
            src: "https://ik.imagekit.io/dloitl7fd8/Frame%2022.png",
            alt: "Không gian thiền"
          },
  
          quote:
            "Với mong muốn mang đến những phút giây an yên tìm về tự tâm, SBU được sự đồng hành của rất nhiều Phật tử đã hoàn thiện và đưa vào sử dụng không gian thiền tại Bồ Đề Phật Quốc 3404 Westminster Ave., Santa Ana, CA 92703, United States.\nChúng tôi tin chắc khi đắm mình vào sự thanh tịnh, hoàn toàn xa rời thế giới xô bồ ở nơi đây, quý vị sẽ thực sự tìm được sự bình an và hạnh phúc trong lòng mình.",
  
          cardsHeading: "Giới thiệu không gian thiền",
  
          cards: [
            {
              id: "kgt-1",
              title: "Title",
              subtitle: "Subtitle",
              image: ""
            },
            {
              id: "kgt-2",
              title: "Title",
              subtitle: "Subtitle",
              image: ""
            }
          ]
        },
        khongGianThien12Content: {
          title: "CHƯƠNG TRÌNH THIỀN",
  
          quote:
            "Để bất cứ ai đến thiền tập tại Bồ Đề Phật Quốc đều có thể tự tại tìm về bản tâm, chương trình được xây dựng hoàn toàn độc bản, phù hợp với mọi đối tượng, đa dạng về ngôn ngữ hướng dẫn: Việt, Anh, Trung.\nĐặc biệt thời gian thiền đa dạng sẽ giúp bất kỳ ai dù bận rộn đến đâu cũng có thể sắp xếp tham gia được.\nSBB xin được cúng dường toàn bộ chi phí thiền tập tại Bồ Đề Phật Quốc, hân hạnh được chào đón Quý vị, xin hãy kéo xuống để ghi danh ngay hôm nay.",
  
          image: {
            src: "https://ik.imagekit.io/dloitl7fd8/Frame%2024.png",
            alt: "Chương trình thiền"
          },
  
          cardsHeading: "Giới thiệu không gian thiền",
  
          cards: [
            {
              id: "ctp-1",
              title: "Title",
              subtitle: "Subtitle",
              image: ""
            },
            {
              id: "ctp-2",
              title: "Title",
              subtitle: "Subtitle",
              image: ""
            }
          ]
        },
        ghiDanhThienContent: {
          title: "GHI DANH THIỀN",
  
          desktopImage:
            "https://ik.imagekit.io/dloitl7fd8/image%2030.png",
  
          fields: {
            fullName: {
              label: "Tên tên",
              placeholder: "Nhập tên của bạn"
            },
            dharmaName: {
              label: "Pháp danh",
              placeholder: "Nhập Pháp danh của bạn"
            },
            birthDate: {
              label: "Ngày, tháng, năm sinh",
              placeholder: "dd/mm/yyyy"
            },
            gender: {
              label: "Giới tính",
              male: "Nam",
              female: "Nữ"
            },
            email: {
              label: "Email",
              placeholder: "abcde@gmail.com"
            },
            phone: {
              label: "Điện thoại",
              placeholder: "123 xxx xxx xxx"
            },
            program: {
              label: "Chương trình ghi danh",
              options: [
                { id: "p1", label: "Sơ trung đẳng Phật học" }
              ]
            },
            attendance: {
              label: "Hình thức tham dự",
              options: [
                { id: "a1", label: "Học tại lớp" }
              ]
            }
          },
  
          submitLabel: "GHI DANH NGAY"
        }
  
  
  
      },
      page4: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'CHƯƠNG TRÌNH\nSƠ TRUNG ĐẲNG',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/Desktop%20-%201%20(1).png?updatedAt=1766088914491',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/bode34%201.png?updatedAt=1766088904482',
          published: true
        },
        chuongTrinhSoTrungDangContent: {
          title: "CHƯƠNG TRÌNH SƠ TRUNG ĐẲNG",
  
          image: {
            src: "https://ik.imagekit.io/dloitl7fd8/image%206%20(2).png",
            alt: "Chương trình sơ trung đẳng"
          },
  
          meta: {
            duration: "Thời gian học 3 năm, mỗi năm có 44 tuần, mỗi tuần học 9 giờ",
            schedule: [
              "Thứ 2, 4, 6: 7:00 pm - 9:00 pm",
              "Thứ 7: từ 16:00 pm - 17:00 pm"
            ]
          },
  
          curriculum: {
            left: [
              "1- Tư tưởng Phật học",
              "2- Pháp Vấn Túc Luận (Phật pháp Cơ bản)",
              "3- Kinh Pháp Cú",
              "4- Kinh Bách Dụ",
              "5- Kinh Bát Đại Nhân Giác",
              "6- Văn Hóa Học Phật Giáo",
              "7- Kinh Phật Thuyết A Di Đà",
              "8- Lược sử Phật giáo Mahayana",
              "9- Tập Dị Môn Túc Luận",
              "10- Kinh Na Tiên Tỳ Kheo",
              "11- Kinh Di Giáo",
              "12- Kinh Tứ Thập Nhị Chương",
              "13- Kinh Tạp A Hàm"
            ],
            right: [
              "14- Kinh Trung Bộ",
              "15- Luận đại thừa trăm minh môn",
              "16- Lược sử Phật giáo Theravada",
              "17- Duy thức Bát giáo",
              "18- Duy Ma Cật Sở Thuyết",
              "19- Kinh Viên Giác",
              "20- Kinh Kim Cang",
              "21- Kinh Tăng Chi Bộ",
              "22- Kinh Trung A Hàm",
              "23- Kinh Thắng Man",
              "24- Phật giáo Hoa Kỳ",
              "25- Pháp Hành",
              "26- Thực tập dã ngoại"
            ]
          }
        },
        nienKhoaContent: {
          blocks: [
            {
              id: "nk-block-1",
              type: "schedule",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop: "https://ik.imagekit.io/dloitl7fd8/Frame%2030.png",
              imageMobile:
                "https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%209%20(5).png?updatedAt=1766755750224",
              schedules: {
                heading: "Thời khóa biểu áp dụng từ ngày 2/6/2025:",
                items: [
                  {
                    id: "mon",
                    dayLabel: "Thứ 2 hàng tuần",
                    details: [
                      "19h-19h55: Kinh Bách Dụ",
                      "20h05-21h: Lược Sử Phật Giáo Mahayana"
                    ]
                  },
                  {
                    id: "wed",
                    dayLabel: "Thứ 4 hàng tuần",
                    details: [
                      "19h-19h55: Kinh Phật Thuyết A Di Đà",
                      "20h05-21h: Tư Tưởng Phật Học"
                    ]
                  },
                  {
                    id: "fri",
                    dayLabel: "Thứ 6 hàng tuần",
                    details: [
                      "19h-19h55: Kinh Pháp Cú",
                      "20h05-21h: Kinh Bát Đại Nhân Giác"
                    ]
                  },
                  {
                    id: "sat",
                    dayLabel: "Thứ 7 hàng tuần",
                    details: [
                      "16h-17h: Pháp Uẩn Túc Luận"
                    ]
                  }
                ]
              }
            },
  
            {
              id: "nk-block-2",
              type: "course",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop: "https://ik.imagekit.io/dloitl7fd8/Frame%2030.png",
              courses: [
                {
                  id: "c1",
                  title: "Hòa thượng: Thích Nhật Từ - Giáo thọ và Thanh Nguyên Niệm",
                  description:
                    "Những vấn đề chung, ý nghĩa của việc tu học, nội dung, mục đích và phương pháp tu học. Giúp tăng, ni, phật tử nhận thức rõ hơn về trách nhiệm của người con Phật trong việc hoằng truyền Chánh Pháp."
                },
                {
                  id: "c2",
                  title: "Định Mạnh Kỳ - Giáo thọ sư Thích Nguyên Đình",
                  description:
                    "Nội dung bao gồm các phương pháp giải quyết các vấn đề liên quan đến sự xung đột, bất đồng ý kiến, thiếu niềm tin giữa các phật tử với nhau, giữa các phật tử với tăng, ni và ngược lại. Giúp mỗi người tự điều chỉnh lại hành vi, lời nói và ý nghĩ của mình trong việc tu học."
                },
                {
                  id: "c3",
                  title: "Định Pháp Tự - Giáo thọ và Tư Quảng",
                  description:
                    "Làm thế nào để áp dụng các phương pháp tu tập vào đời sống hàng ngày, giúp cho mỗi người vượt qua những khó khăn, thử thách."
                }
              ]
            },
  
            {
              id: "nk-block-3",
              type: "course",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop: "https://ik.imagekit.io/dloitl7fd8/Frame%2030.png",
              courses: [
                {
                  id: "c4",
                  title: "Thượng Tọa: Thích Huệ Khai - Giáo thọ sư Thích Minh Lợi",
                  description:
                    "Nội dung bao gồm các phương pháp giảng dạy kinh điển, luật tạng, luận tạng, lịch sử Phật giáo, văn học Phật giáo, giúp tăng, ni, phật tử có khả năng truyền bá Phật pháp."
                },
                {
                  id: "c5",
                  title: "Định PHẬT THUYẾT A DI ĐÀ - Giáo thọ sư Thích Minh Lợi",
                  description:
                    "Nội dung bao gồm các phương pháp tu tập Tịnh độ, giúp cho mỗi người có khả năng niệm Phật, tụng kinh, trì chú, toạ thiền."
                },
                {
                  id: "c6",
                  title: "Niệm Phật: Độc Cư - Giáo thọ và Thích Nguyên Đình",
                  description:
                    "Nội dung bao gồm các phương pháp tu tập niệm Phật, giúp cho mỗi người có khả năng niệm Phật liên tục."
                },
                {
                  id: "c7",
                  title: "Tu Xướng Phật Học - Giáo thọ sư Thích Hoằng Minh",
                  description:
                    "Nội dung bao gồm các phương pháp tu tập pháp xướng, giúp cho mỗi người có khả năng hát tụng kinh."
                }
              ]
            }
          ]
        },
        nienKhoa2022Content: {
          title: "NIÊN KHÓA 2022 - 2025",
  
          imageDesktop: "https://ik.imagekit.io/dloitl7fd8/Frame%2025.png",
          imageMobile: "https://ik.imagekit.io/dloitl7fd8/Frame%2025.png",
  
          curriculum: {
            left: {
              id: "left",
              items: [
                "1- Phật Giáo Miến Điện",
                "2- Phật Giáo Sri Lanka",
                "3- Phật Giáo Tây Tạng",
                "4- Phật Giáo Mông Cổ",
                "5- Phật Giáo Cambodia",
                "6- Phật Giáo Hàn Quốc",
                "7- Phật Giáo Ấn Độ",
                "8- Phật Giáo Nhật Bản",
                "9- Phật Giáo Lào",
                "10- Phật Giáo Thái Lan",
                "11- Tư Tưởng Phật Học",
                "12- Luật Đại Tỳ Trăm Pháp",
                "13- Kinh Trung Bộ Toát Yếu 2",
                "14- Kinh Thắng Man",
                "15- Kinh Tạp A Hàm",
                "16- Kinh Na Tiên Tỳ Kheo",
                "17- Kinh Bách Dụ",
                "18- Kinh Tăng Chi Bộ 2",
                "19- Phật Pháp Cơ Bản",
                "20- Nhị Khóa Hiệp Giải",
                "21- Tâm Kinh Bát Nhã"
              ]
            },
  
            right: {
              id: "right",
              items: [
                "22- Duy Thức Tam Thập Tụng",
                "23- Kinh Duy Ma Cật",
                "24- Kinh Viên Giác",
                "25- Tập Dị Môn Túc Luận",
                "26- Việt Nam Phật Giáo Sử Lược",
                "27- Phật Giáo Ấn Độ (Nâng cao)",
                "28- Phật Giáo Nhật Bản (Nâng cao)",
                "29- Phật Giáo Lào (Nâng cao)",
                "30- Phật Giáo Thái Lan (Nâng cao)",
                "31- Phật Giáo Miến Điện (Nâng cao)",
                "32- Phật Giáo Sri Lanka (Nâng cao)",
                "33- Phật Giáo Tây Tạng (Nâng cao)",
                "34- Phật Giáo Mông Cổ (Nâng cao)",
                "35- Phật Giáo Cambodia (Nâng cao)",
                "36- Phật Giáo Hàn Quốc"
              ]
            }
          }
        },
        nienKhoa2019Content: {
          title: "NIÊN KHÓA 2019 - 2022",
  
          imageDesktop:
            "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(1).png",
          imageMobile:
            "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(1).png",
  
          curriculum: {
            left: {
              id: "left",
              items: [
                "1- Kinh Trung A Hàm",
                "2- Kinh Viên Giác",
                "3- Đại Thừa Khởi Tín Luận",
                "4- Kinh Kim Cang",
                "5- Kinh Tạp A Hàm",
                "6- Kinh Thắng Man",
                "7- Kinh Trung Bộ",
                "8- Kinh Phật Thuyết A Di Đà",
                "9- Kinh Tăng Chi Bộ",
                "10- Kinh Na Tiên Tỳ Kheo",
                "11- Tư Tưởng Phật Học",
                "12- Trung Quán Luận",
                "13- Phật Pháp Cơ Bản",
                "14- Thanh Tịnh Đạo Luận",
                "15- Kinh Pháp Cú",
                "16- Kinh Bát Đại Nhân Giác",
                "17- Kinh Bách Dụ",
                "18- Bách Pháp Minh Môn Luận",
                "19- Kinh Tứ Thập Nhị Chương",
                "20- Du Già Bồ Tát Giới"
              ]
            },
  
            right: {
              id: "right",
              items: [
                "21- Tâm Kinh Bát Nhã",
                "22- Phật Giáo Miến Điện",
                "23- Duy Thức Tâm Thập Tụng",
                "24- Phật Giáo Tích Lan",
                "25- Nhị Khóa Hiệp Giải",
                "26- Phật Giáo Thái Lan",
                "27- Kinh Duy Ma Cật Sở Thuyết",
                "28- Phật Giáo Triều Tiên",
                "29- Kinh Di Giáo",
                "30- Phật Giáo Tây Tạng",
                "31- Việt Nam Phật Giáo Sử Lược",
                "32- Phật Giáo Campuchia",
                "33- Phật Giáo Ấn Độ",
                "34- Phật Giáo Lào",
                "35- Phật Giáo Việt Nam",
                "36- Phật Giáo Hoa Kỳ",
                "37- Phật Giáo Trung Quốc",
                "38- Phật Giáo Mông Cổ",
                "39- Phật Giáo Nhật Bản"
              ]
            }
          }
        }
  
  
  
  
  
      },
      page5: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'CHƯƠNG TRÌNH\nCAO ĐẲNG',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/Desktop%20-%201%20(2).png',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/pngtree-green-bodhi-leaves-with-sunset-decorate-sun-translucent-photo-image_27477100%202.png?updatedAt=1766093896564',
          published: true
        },
        chuongTrinhCaoDangContent: {
          title: "CHƯƠNG TRÌNH CAO ĐẲNG",
  
          imageDesktop: "https://ik.imagekit.io/dloitl7fd8/Frame%2029.png",
  
          meta: {
            duration: "Thời gian học 3 năm, mỗi năm học 46 tuần, mỗi tuần học 9 giờ",
            schedule: [
              "Thứ 2, 4, 6: từ 7:00 pm - 9:00 pm",
              "Thứ 7: từ 16:00 pm - 17:00 pm"
            ]
          },
  
          curriculum: {
            left: [
              "1- Kinh Trường bộ",
              "2- Kinh Tương Ưng bộ",
              "3- Kinh Trường A hàm",
              "4- Kinh Tăng Nhất A hàm",
              "5- Kinh Pháp Hoa yếu lược",
              "6- Kinh Hoa Nghiêm yếu lược",
              "7- Kinh Lăng Nghiêm yếu lược",
              "8- Kinh Đại Bát Niết Bàn",
              "9- Kinh Lăng Già yếu lược",
              "10- Tánh Không Luận",
              "11- Thánh Duy Thức Luận"
            ],
            right: [
              "12- Câu Xá Luận",
              "13- Đại thừa thành nghiệp luận",
              "14- Phật thừa tông yếu luận",
              "15- Đại Thừa Chỉ Quán Luận",
              "16- Trung Quán Luận",
              "17- Nhân Minh Luận",
              "18- Toát yếu Vi Diệu Pháp",
              "19- Yếu chỉ Thiên tông",
              "20- Yếu chỉ Mật tông",
              "21- Yếu chỉ Tịnh độ tông",
              "22- Yếu chỉ Luật tông"
            ]
          }
        },
        caoDangNienKhoaContent: {
          blocks: [
            {
              id: "cd-nk-block-1",
              type: "schedule",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(2).png?updatedAt=1766094910015",
              imageMobile:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(2).png?updatedAt=1766094910015",
              schedules: {
                heading: "Thời khóa biểu áp dụng từ ngày 2/6/2025:",
                items: [
                  {
                    id: "mon",
                    dayLabel: "Thứ 2 hàng tuần",
                    details: [
                      "19h-19h55: Lược Sử Phật giáo",
                      "20h05-21h: Tứ Diệu Đế Luận"
                    ]
                  },
                  {
                    id: "wed",
                    dayLabel: "Thứ 4 hàng tuần",
                    details: [
                      "19h-19h55: Tánh Không Luận",
                      "20h05-21h: Đại Thừa Chỉ Quán Luận"
                    ]
                  },
                  {
                    id: "fri",
                    dayLabel: "Thứ 6 hàng tuần",
                    details: [
                      "19h-19h55: Kinh Tăng Nhất A Hàm",
                      "20h05-21h: Kinh Tương Ưng Bộ"
                    ]
                  },
                  {
                    id: "sat",
                    dayLabel: "Thứ 7 hàng tuần",
                    details: ["16h-17h: Pháp Uẩn Túc Luận"]
                  }
                ]
              }
            },
  
            {
              id: "cd-nk-block-2",
              type: "course",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(2).png?updatedAt=1766094910015",
              courses: [
                {
                  id: "c1",
                  title: "Phật Học Cơ Bản Luận – Thích Huyền Châu",
                  description:
                    "Tam quy, Ngũ giới, Thập thiện, Tứ niệm xứ, Tứ chánh cần, Ngũ căn, Ngũ lực, Thất bồ đề phần, Bát chánh đạo, Ngũ uẩn, Thập nhị nhân duyên, Tứ đế… giúp xây dựng nền tảng Phật học căn bản."
                },
                {
                  id: "c2",
                  title: "Kinh Tăng Nhất A Hàm – Thích Minh Tịnh",
                  description:
                    "Các pháp tu tập căn bản của Phật giáo Nguyên thủy, giúp người học có cái nhìn tổng quan và con đường tu tập giải thoát."
                },
                {
                  id: "c3",
                  title: "Kinh Tương Ưng Bộ – Tứ Quảng",
                  description:
                    "Làm rõ mối tương quan giữa các pháp, giúp áp dụng giáo pháp vào đời sống tu tập và vượt qua khó khăn."
                }
              ]
            },
  
            {
              id: "cd-nk-block-3",
              type: "course",
              title: "NIÊN KHÓA 2025-2028",
              imageDesktop:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(2).png?updatedAt=1766094910015",
              courses: [
                {
                  id: "c4",
                  title: "Pháp Luân Tự Luận – Thích Nguyên Định",
                  description:
                    "Giải quyết xung đột, bất đồng, điều chỉnh hành vi, lời nói và ý nghĩ trong quá trình tu học."
                },
                {
                  id: "c5",
                  title: "Phật Thuyết A Di Đà Luận – Thích Minh Lợi",
                  description:
                    "Phương pháp tu tập Tịnh độ: niệm Phật, tụng kinh, trì chú, tọa thiền."
                },
                {
                  id: "c6",
                  title: "Phật Giáo Thường Thức – Thích Nguyên Nghiêm",
                  description:
                    "Kiến thức tổng quan về Phật giáo, giúp ứng dụng giáo pháp vào đời sống hằng ngày."
                },
                {
                  id: "c7",
                  title: "Tâm Kinh Bát Nhã – Thích Hoằng Khải",
                  description:
                    "Thiền định và trí tuệ Bát Nhã, giúp an trú tâm và hành trì bền vững."
                }
              ]
            }
          ]
        },
        caoDang2022Content: {
          title: "NIÊN KHÓA 2022-2025",
  
          imageDesktop:
            "https://ik.imagekit.io/dloitl7fd8/Frame%2025%20(1).png",
  
          imageMobile:
            "https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%209%20(9).png",
  
          curriculum: {
            left: [
              "1- Phật Thừa Tông Yếu Luận",
              "2- Kinh Trường A Hàm",
              "3- Kinh Trường Bộ",
              "4- Yếu Chỉ Mật Tông",
              "5- Kinh Pháp Hoa",
              "6- Nhân Minh Luận",
              "7- Kinh Hoa Nghiêm Yếu Lược",
              "8- Kinh Đại Thừa Nhập Lăng Già",
              "9- Kinh Lăng Nghiêm Yếu Lược",
              "10- Yếu Chỉ Thiền Định"
            ],
            right: [
              "11- Phật Thừa Tông Yếu Luận",
              "12- Kinh Trường A Hàm",
              "13- Kinh Trường Bộ",
              "14- Yếu Chỉ Mật Tông",
              "15- Kinh Pháp Hoa",
              "16- Nhân Minh Luận",
              "17- Kinh Hoa Nghiêm Yếu Lược",
              "18- Kinh Đại Thừa Nhập Lăng Già",
              "19- Kinh Lăng Nghiêm Yếu Lược",
              "20- Yếu Chỉ Thiền Định"
            ]
          }
        },
        caoDang2019Content: {
          title: "NIÊN KHÓA 2019-2022",
  
          imageMobile:
            "https://ik.imagekit.io/dloitl7fd8/iPhone%2014%20&%2015%20Pro%20Max%20-%209%20(3).png",
  
          imageDesktop:
            "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(3).png",
  
          curriculum: {
            left: [
              "1- Câu Xá Luận",
              "2- Kinh Tăng Nhất A Hàm",
              "3- Pháp Uẩn Túc Luận",
              "4- Kinh Pháp Hoa Yếu Lược",
              "5- Tập Dị Môn Luận",
              "6- Kinh Lăng Già Yếu Lược",
              "7- Phật Thừa Tôn Yếu Luận",
              "8- Kinh Lăng Nghiêm Yếu Lược",
              "9- Đại Thừa Chỉ Quán Luận",
              "10- Kinh Đại Bát Niết Bàn Yếu Lược"
            ],
            right: [
              "11- Vi Diệu Pháp Toát yếu",
              "12- Nhân Minh Luận",
              "13- Thành Duy Thức Luận",
              "14- Yếu Chỉ Thiền Tông",
              "15- Kinh Trường Bộ",
              "16- Yếu Chỉ Tịnh Độ Tông",
              "17- Kinh Tương Ưng Bộ",
              "18- Yếu Chỉ Mật Tông",
              "19- Kinh Trường A Hàm",
              "20- Yếu Chỉ Luật Tông"
            ]
          }
        }
  
  
  
  
      },
      page6: {
        header: {
          title: 'VIỆN PHẬT HỌC BỒ ĐỀ PHẬT QUỐC',
          mobileTitle: 'CHUYÊN KHOA\nA TỲ ĐÀM',
          subtitle: '',
          backgroundImage: 'https://ik.imagekit.io/dloitl7fd8/Desktop%20-%201%20(3).png?updatedAt=1766101380184',
          mobileBackgroundImage: 'https://ik.imagekit.io/dloitl7fd8/bode16png%202.png?updatedAt=1766101380084',
          published: true
        },
        chuyenKhoaATyDamContent: {
          title: "CHUYÊN KHOA A TỲ ĐÀM",
  
          image: {
            src: "https://ik.imagekit.io/dloitl7fd8/PhotoshopExtension_Image%20(1).png",
            alt: "Chuyên khoa A Tỳ Đàm"
          },
  
          meta: {
            duration: "Thời gian học 3 năm, mỗi năm học 46 tuần, mỗi tuần học 9 giờ",
            schedule: [
              "Thứ 2, 4, 6: từ 17:45 pm - 18:55 pm",
              "Thứ 7: từ 16:00 pm – 17:00 pm"
            ]
          },
  
          curriculum: {
            kosa: {
              heading: "Tạng Câu Xá Luận:",
              items: [
                "1- Phẩm Phân Biệt Giới",
                "2- Phẩm Phân Biệt Căn",
                "3- Phẩm Phân Biệt Thế Gian",
                "4- Phẩm Phân Biệt Nghiệp",
                "5- Phẩm Phân Biệt Tùy miên",
                "6- Phẩm Phân Biệt Hiền thánh",
                "7- Phẩm Phân Biệt Trí",
                "8- Phẩm Phân Biệt Định",
                "9- Phẩm Phá ngã"
              ]
            },
  
            abhidhamma: {
              heading: "Tạng Vi Diệu Pháp:",
              items: [
                "1- Bộ Pháp Tụ",
                "2- Bộ Phân Tích",
                "3- Bộ Chất Ngữ",
                "4- Bộ Nhơn Chế Định",
                "5- Bộ Ngữ Tông",
                "6- Bộ Song Đối",
                "7- Bộ Vị Trí"
              ]
            }
          }
        },
        nienKhoaContent: {
          blocks: [
            {
              id: "p6b-block-1",
              type: "schedule",
              title: "NIÊN KHÓA 2025-2028",
  
              imageDesktop:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(4).png?updatedAt=1766258517924",
  
              imageMobile:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(4).png?updatedAt=1766258517924",
  
              schedules: {
                heading: "Thời khóa biểu áp dụng từ ngày 2/6/2025:",
                items: [
                  {
                    id: "mon",
                    dayLabel: "Thứ 2 hàng tuần",
                    details: ["17h45-18h45: Vi Diệu Pháp"]
                  },
                  {
                    id: "wed",
                    dayLabel: "Thứ 4 hàng tuần",
                    details: ["17h45-18h45: Câu Xá Luận - Quyển 2"]
                  },
                  {
                    id: "fri",
                    dayLabel: "Thứ 6 hàng tuần",
                    details: ["17h45-18h45: Câu Xá Luận - Quyển 5"]
                  },
                  {
                    id: "sat",
                    dayLabel: "Thứ 7 hàng tuần",
                    details: ["16h-17h: Pháp Uẩn Túc Luận"]
                  }
                ]
              }
            },
  
            {
              id: "p6b-block-2",
              type: "course",
              title: "NIÊN KHÓA 2025-2028",
  
              imageDesktop:
                "https://ik.imagekit.io/dloitl7fd8/Frame%2030%20(4).png?updatedAt=1766258517924",
  
              courses: [
                {
                  id: "c1",
                  title: "Pháp Uẩn Túc Luận – Giáo thọ sư Thích Huyền Châu ›",
                  description:
                    "Bộ luận giải giáo lý Phật pháp tối quan trọng, thể hiện tinh thần hoằng pháp và truyền trao rõ ràng những lời Đức Phật chỉ dạy."
                },
                {
                  id: "c2",
                  title: "Câu Xá Luận – Giáo thọ sư Thích Huyền Châu ›",
                  description:
                    "Quán sát lý nhân quả mê – ngộ để đạt trí tuệ vô lậu, hướng đến Niết bàn, trình bày trọn vẹn trí tuệ đối pháp."
                },
                {
                  id: "c3",
                  title: "Vi Diệu Pháp – Giáo thọ sư Thích Minh Lợi ›",
                  description:
                    "Những phương pháp phát triển trí tuệ, phân tích các hiện tượng tâm thần và tâm linh nhằm giải thoát khổ đau."
                }
              ]
            }
          ]
        },
        programSectionEFContent: {
          title: "NIÊN KHÓA 2022-2025",
  
          images: {
            desktop: "https://ik.imagekit.io/dloitl7fd8/bode54%201.png",
            mobile:
              "https://ik.imagekit.io/dloitl7fd8/bode54%201%20(1).png?updatedAt=1766430861607",
            alt: "Niên khóa 2022-2025"
          },
  
          links: [
            {
              id: "ef-1",
              label: "Câu Xá Luận",
              href: "#"
            },
            {
              id: "ef-2",
              label: "Vi Diệu Pháp",
              href: "#"
            },
            {
              id: "ef-3",
              label: "Thi Thiết Luận",
              href: "#"
            },
            {
              id: "ef-4",
              label: "Đại Trí Độ Luận",
              href: "#"
            },
            {
              id: "ef-5",
              label: "Pháp Uẩn Túc Luận",
              href: "#"
            }
          ]
        }
  
  
  
      }
    }
  
}
}; 
