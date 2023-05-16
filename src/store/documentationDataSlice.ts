import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// documentationMaterialsSlice
type Info = {
  title: string
  description: string
}

interface InfoState {
  documentationData: Info[]
}

const initialState: InfoState = {
  documentationData: [
    {
      title: 'Фанера',
      description:
        'Фанера - это листовой материал, состоящий из склеенных между собой тонких слоев древесной фанеры. Она широко используется в строительстве для создания опалубки, укладки полов, стен и других конструкций.',
    },
    {
      title: 'Цемент',
      description:
        'Цемент - это связующее вещество, используемое в строительстве для создания бетона и растворов. Он обладает свойством затвердевать под воздействием воды, образуя прочную и долговечную конструкцию.',
    },
    {
      title: 'Керамические блоки',
      description:
        'Керамические блоки - это строительные материалы из глины, подвергнутой обжигу при высоких температурах. Они широко применяются в строительстве стен и перегородок благодаря своей прочности и теплоизоляционным свойствам.',
    },
    {
      title: 'Доски обрезные',
      description:
        'Доски обрезные - это пиломатериалы, полученные после распиловки лесоматериалов. Они широко используются в строительстве для создания перекрытий, полов, обшивки стен и других конструкций.',
    },
    {
      title: 'Строительный кирпич',
      description:
        'Строительный кирпич - это один из основных материалов для возведения стен и перегородок. Он изготавливается из глины и обжигается, чтобы получить прочный и долговечный материал.',
    },
    {
      title: 'Сайдинг',
      description:
        'Сайдинг - это отделочный материал, который укладывается на внешнюю поверхность здания. Он может быть выполнен из различных материалов, таких как винил, алюминий, дерево и другие. Сайдинг защищает здание от воздействия окружающей среды и придает ему привлекательный внешний вид.',
    },
    {
      title: 'Кровельный материал',
      description:
        'Кровельный материал - это материал, используемый для создания кровли здания. Он может быть представлен различными видами, такими как металлические листы, керамические плитки, шифер и другие. Кровельный материал обеспечивает защиту от внешних воздействий и обеспечивает герметичность кровли.',
    },
    {
      title: 'Арматура',
      description:
        'Арматура - это металлический стержень или проволока, используемая в строительстве для армирования бетонных конструкций. Она придает бетону дополнительную прочность и устойчивость к нагрузкам.',
    },
    {
      title: 'Гипсовая плита',
      description:
        'Гипсовая плита - это строительный материал, изготовленный из гипса. Она используется для создания перегородок, отделочных поверхностей и других конструкций. Гипсовая плита обладает хорошей звукоизоляцией и огнестойкостью.',
    },
    {
      title: 'Бетон',
      description:
        'Бетон - это смесь из цемента, песка, щебня и воды. Он является одним из основных строительных материалов и используется для возведения фундаментов, стен, перекрытий и других конструкций. Бетон обладает высокой прочностью и долговечностью.',
    },
    {
      title: 'Газобетонные блоки',
      description:
        'Газобетонные блоки - это легкие строительные блоки, изготовленные из газобетона. Они широко применяются в строительстве для создания стен и перегородок. Газобетонные блоки обладают хорошей теплоизоляцией и звукоизоляцией.',
    },
    {
      title: 'Кровельные листы',
      description:
        'Кровельные листы - это листовые материалы, используемые для покрытия крыши здания. Они могут быть выполнены из металла, полимеров или других материалов. Кровельные листы обеспечивают защиту от атмосферных осадков и улучшают внешний вид здания.',
    },
    {
      title: 'Песок',
      description:
        'Песок - это натуральный материал, состоящий из мелких зерен. В строительстве песок используется для создания бетона, растворов, а также в качестве заполнителя для фундаментов и других конструкций.',
    },
    {
      title: 'Известь',
      description:
        'Известь - это минеральный материал, используемый в строительстве и отделке помещений. Она широко применяется для приготовления растворов, штукатурки стен, а также для обработки поверхностей перед покраской.',
    },
    {
      title: 'Металлические конструкции',
      description:
        'Металлические конструкции - это элементы, изготовленные из металла, используемые для создания каркасов зданий, мостов, сооружений и других объектов. Они обладают высокой прочностью и устойчивостью к нагрузкам.',
    },
    {
      title: 'Полиуретановая пена',
      description:
        'Полиуретановая пена - это материал, применяемый в строительстве для утепления и герметизации. Она наносится в виде пены и затвердевает, образуя прочную теплоизоляционную и звукоизоляционную пленку.',
    },
    {
      title: 'Керамическая плитка',
      description:
        'Керамическая плитка - это плоский строительный материал, изготовленный из глины, обжигаемой при высоких температурах. Она используется для отделки стен, полов и других поверхностей, обладает высокой прочностью и долговечностью.',
    },
    {
      title: 'Стекло',
      description:
        'Стекло - прозрачный материал, получаемый из плавленого песка. Оно широко используется в строительстве для окон, дверей, фасадов зданий и других конструкций. Стекло обладает хорошей прочностью и пропускает свет, создавая комфортные условия в помещении.',
    },
    {
      title: 'Камень',
      description:
        'Камень - это природный материал, используемый в строительстве для создания фундаментов, стен, отделочных поверхностей и других конструкций. Различные виды камня, такие как гранит, мрамор, известняк и др., имеют свои уникальные свойства и внешний вид.',
    },
    {
      title: 'Керамические панели',
      description:
        'Керамические панели - это отделочный материал, состоящий из керамических плиток, скрепленных между собой. Они используются для облицовки стен, фасадов зданий, создания декоративных элементов. Керамические панели обладают высокой прочностью и стойкостью к воздействию окружающей среды.',
    },
    {
      title: 'Керамогранит',
      description:
        'Керамогранит - это вид керамической плитки, обладающий повышенной прочностью и износостойкостью. Он используется для отделки полов, стен, лестниц и других поверхностей внутри и снаружи зданий. Керамогранит доступен в различных цветах, текстурах и размерах.',
    },
    {
      title: 'Древесно-стружечные плиты',
      description:
        'Древесно-стружечные плиты - это плиты, изготовленные из древесных стружек, смешанных с клеевым связующим веществом. Они используются в строительстве для создания перегородок, полов, мебели и других конструкций. Древесно-стружечные плиты обладают хорошей прочностью и устойчивостью к влаге.',
    },
    {
      title: 'Акриловые ванны',
      description:
        'Акриловые ванны - это санитарно-техническое оборудование, изготовленное из акрилового материала. Они используются для комфортного принятия водных процедур в ванной комнате. Акриловые ванны обладают гладкой поверхностью, стойкостью к воздействию воды и привлекательным внешним видом.',
    },
    {
      title: 'Керамические трубы',
      description:
        'Керамические трубы - это трубы, изготовленные из керамики или керамического композитного материала. Они применяются для систем водоснабжения, отопления, канализации и других инженерных коммуникаций. Керамические трубы обладают высокой прочностью, стойкостью к химическим веществам и долговечностью.',
    },
    {
      title: 'Поликарбонатные листы',
      description:
        'Поликарбонатные листы - это прозрачный пластиковый материал с высокой прочностью и устойчивостью к воздействию ультрафиолетового излучения. Они широко используются для создания навесов, остекления, теплиц, перегородок и других конструкций. Поликарбонатные листы обладают хорошей теплоизоляцией и светопропусканием.',
    },
    {
      title: 'Минеральная вата',
      description:
        'Минеральная вата - это теплоизоляционный материал, получаемый из базальтовой породы или стекловолокна. Она используется для утепления стен, кровли, полов, труб и других конструкций. Минеральная вата обладает низкой теплопроводностью, звукоизоляцией и огнестойкостью.',
    },
    {
      title: 'Керамические уголки',
      description:
        'Керамические уголки - это специальные элементы из керамики, используемые для отделки углов стен и поверхностей. Они обеспечивают защиту углов от механических повреждений и создают завершенный внешний вид интерьера или экстерьера.',
    },
    {
      title: 'Гипсокартонные листы',
      description:
        'Гипсокартонные листы - это строительный материал, состоящий из гипсового сердцевины, закрытой двумя слоями картона. Они используются для создания перегородок, потолков, отделки стен и других конструкций. Гипсокартонные листы легкие, прочные и позволяют осуществлять различные дизайнерские решения.',
    },
    {
      title: 'Штукатурка',
      description:
        'Штукатурка - это отделочный материал, применяемый для выравнивания и защиты поверхностей стен и потолков. Она создает гладкую и ровную поверхность, на которую можно наносить краску, обои или другие отделочные материалы. Штукатурка может быть нанесена как вручную, так и с использованием специального оборудования.',
    },
    {
      title: 'Фильтр для воды',
      description:
        'Фильтр для воды - это устройство, предназначенное для очистки воды от различных примесей, включая песок, глину, хлор, органические вещества и другие загрязнения. Он обеспечивает чистую и безопасную воду для питья и использования в бытовых целях. Фильтры для воды доступны в разных типах и моделях, подходящих для различных потребностей.',
    },
    {
      title: 'Шифер',
      description:
        'Шифер - это строительный материал, изготовленный из асбестоцементной смеси. Он применяется для кровли и облицовки зданий. Шифер обладает высокой прочностью, огнестойкостью и защищает от атмосферных воздействий. Он широко используется в строительстве как надежное и доступное решение.',
    },
    {
      title: 'Трубы ПЭ для водоснабжения',
      description:
        'Трубы ПЭ (полиэтиленовые трубы) - это современный материал для систем водоснабжения. Они обладают высокой прочностью, химической стойкостью и долговечностью. Трубы ПЭ легкие и гибкие, что облегчает их монтаж и установку. Они широко используются в городских и частных водопроводах.',
    },
    {
      title: 'Профиль маячковый',
      description:
        'Профиль маячковый - это металлический элемент, используемый при укладке стяжки или выравнивании поверхностей пола. Он позволяет создать ровный и гладкий горизонтальный уровень для последующих отделочных работ. Профиль маячковый обеспечивает точность и надежность при выполнении строительных работ.',
    },
    {
      title: 'Смотровые люки',
      description:
        'Смотровые люки - это специальные конструкции, предназначенные для доступа к подземным коммуникациям, колодцам и техническим системам. Они обеспечивают удобный и безопасный доступ для обслуживания и ремонта. Смотровые люки доступны в различных размерах и материалах, чтобы соответствовать конкретным потребностям.',
    },
    {
      title: 'Пластиковые окна',
      description:
        'Пластиковые окна - это оконные конструкции, изготовленные из пластиковых профилей, обычно из ПВХ. Они обладают хорошей теплоизоляцией, шумоизоляцией и защитой от воздействия атмосферных условий. Пластиковые окна легкие, прочные и требуют минимального ухода.',
    },
    {
      title: 'Кормушка для птиц',
      description:
        'Кормушка для птиц - это специальное устройство, используемое для кормления птиц во дворе или саду. Она предназначена для размещения птичьего корма и обеспечивает удобный доступ птиц к пище. Кормушки для птиц бывают разных размеров и форм, чтобы привлечь разные виды птиц.',
    },
    {
      title: 'Стеновые панели',
      description:
        'Стеновые панели - это отделочный материал, используемый для создания стенных поверхностей внутри помещений. Они могут быть изготовлены из разных материалов, таких как дерево, гипс, пластик или металл. Стеновые панели предоставляют широкий выбор цветов и текстур, позволяя создавать различные стилевые решения в интерьере.',
    },
    {
      title: 'Кабельные каналы',
      description:
        'Кабельные каналы - это специальные каналы, предназначенные для прокладки и скрытого размещения проводов и кабелей. Они обеспечивают безопасное и аккуратное прокладывание кабельной инфраструктуры внутри зданий. Кабельные каналы доступны в разных размерах и материалах, чтобы соответствовать потребностям проводки.',
    },
    {
      title: 'Гвозди',
      description:
        'Гвозди - это строительные крепежные элементы, используемые для соединения материалов, например, деревянных деталей или металлических конструкций. Они имеют острую концевую часть и гладкую или шероховатую поверхность. Гвозди различных размеров и типов предназначены для разных видов работ и материалов.',
    },
    {
      title: 'Керамические плитки',
      description:
        'Керамические плитки - это популярный отделочный материал, используемый для облицовки полов, стен и других поверхностей внутри помещений. Они обладают прочностью, водонепроницаемостью и широким выбором дизайна. Керамические плитки могут быть гладкими, матовыми, рельефными или имитировать другие материалы, такие как дерево или камень.',
    },
    {
      title: 'Металлические двери',
      description:
        'Металлические двери - это прочные и надежные двери, изготовленные из металлических листов. Они обладают высокой степенью безопасности и защиты от взлома. Металлические двери широко используются для входных дверей в жилых и коммерческих зданиях. Они доступны в разных стилях и отделках, чтобы соответствовать дизайну здания.',
    },
    {
      title: 'Ламинат',
      description:
        'Ламинат - это популярный напольный материал, состоящий из нескольких слоев, включая HDF-плиту, декоративный слой и защитный слой. Ламинат имитирует деревянные или каменные поверхности и обладает прочностью, стойкостью к истиранию и легкостью ухода. Он широко используется для отделки полов в жилых и коммерческих помещениях.',
    },
    {
      title: 'Стеклопакеты',
      description:
        'Стеклопакеты - это конструкции, состоящие из двух или более стекол, разделенных воздушным или газовым пространством. Они используются для окон и остекления зданий. Стеклопакеты обладают отличной теплоизоляцией, звукоизоляцией и защитой от ультрафиолетовых лучей. Они помогают снизить энергопотребление и создать комфортный климат внутри помещений.',
    },
    {
      title: 'Металлические профили',
      description:
        'Металлические профили - это строительные элементы, изготовленные из металла, таких как сталь или алюминий. Они используются для создания каркасов, рам, конструкций и систем поддержки. Металлические профили обладают высокой прочностью, устойчивостью к нагрузкам и долговечностью. Они широко применяются в строительстве и производстве.',
    },
    {
      title: 'Керамические санитарные изделия',
      description:
        'Керамические санитарные изделия - это сантехнические изделия, изготовленные из керамики, такие как унитазы, раковины, биде и ванны. Они обладают высокой прочностью, водонепроницаемостью и стойкостью к химическим веществам. Керамические санитарные изделия являются основными компонентами ванных комнат и туалетов, обеспечивая комфорт и гигиеничность.',
    },
    {
      title: 'Ковровое покрытие',
      description:
        'Ковровое покрытие - это мягкое напольное покрытие, изготовленное из текстильных материалов, таких как шерсть, нейлон или полипропилен. Оно обладает звукоизоляцией, теплоизоляцией и создает комфортную атмосферу в помещении. Ковровое покрытие доступно в разных цветах, узорах и текстурах, позволяя подобрать подходящий дизайн для интерьера.',
    },
    {
      title: 'Садовая мебель',
      description:
        'Садовая мебель - это мебель, предназначенная для использования на открытых пространствах, таких как сады, террасы или балконы. Она обычно изготовлена из погодостойких материалов, таких как дерево, металл или пластик. Садовая мебель включает столы, стулья, лежаки и зонты, обеспечивая комфортное пространство для отдыха и проведения времени на свежем воздухе.',
    },
    {
      title: 'Электроинструменты',
      description:
        'Электроинструменты - это инструменты, работающие от электрической энергии и используемые для различных задач. Они включают в себя такие инструменты, как дрели, пилы, шлифовальные машины, отбойные молотки и многое другое. Электроинструменты облегчают выполнение работ и повышают эффективность. Они широко применяются в строительстве, ремонте и домашнем хозяйстве.',
    },
    {
      title: 'Солнечные батареи',
      description:
        'Солнечные батареи - это устройства, использующие солнечную энергию для преобразования ее в электрическую энергию. Они состоят из солнечных панелей, которые захватывают солнечный свет и генерируют постоянный ток. Солнечные батареи используются для питания различных устройств, от небольших электронных устройств до больших систем солнечной энергии для домов и предприятий.',
    },
    {
      title: 'Бытовая техника',
      description:
        'Бытовая техника - это электрические приборы и устройства, используемые в быту для выполнения различных задач. Она включает в себя холодильники, стиральные машины, плиты, посудомоечные машины, микроволновые печи и многое другое. Бытовая техника облегчает выполнение повседневных задач и улучшает комфорт в доме.',
    },
    {
      title: 'Осветительные приборы',
      description:
        'Осветительные приборы - это устройства, используемые для освещения помещений или наружных пространств. Они включают в себя люстры, светильники, настольные лампы, наружные фонари и многое другое. Осветительные приборы обеспечивают необходимое освещение, создают атмосферу и улучшают видимость в различных ситуациях.',
    },
    {
      title: 'Вентиляционные системы',
      description:
        'Вентиляционные системы - это системы, предназначенные для обеспечения циркуляции и очистки воздуха в зданиях. Они включают в себя вентиляторы, воздуховоды, фильтры и другие компоненты. Вентиляционные системы обеспечивают свежий и чистый воздух в помещении, удаляют запахи, влагу и загрязнения, а также поддерживают оптимальную температуру и влажность.',
    },
    {
      title: 'Системы безопасности',
      description:
        'Системы безопасности - это комплексные системы и устройства, предназначенные для обеспечения безопасности и защиты зданий и их обитателей. Они включают в себя системы видеонаблюдения, пожарной сигнализации, охранной сигнализации, контроля доступа и другие элементы. Системы безопасности помогают предотвратить кражи, пожары, несанкционированный доступ и обеспечивают общую безопасность здания.',
    },
    {
      title: 'Уличные фонари',
      description:
        'Уличные фонари - это осветительные приборы, установленные на улицах, тротуарах или других открытых пространствах. Они обеспечивают освещение на улице, повышают видимость и безопасность. Уличные фонари могут быть разных типов, таких как столбовые фонари, настенные фонари или подземные фонари. Они используются для освещения общественных мест, парков, дорог и других уличных территорий.',
    },
    {
      title: 'Теплоизоляционные материалы',
      description:
        'Теплоизоляционные материалы - это материалы, используемые для теплоизоляции зданий и сооружений. Они помогают сохранять тепло в зимний период и защищать от жары в летний период. Такие материалы включают в себя минеральную вату, пенопласт, пенополистирол, пенополиуретан и другие. Они устанавливаются на стены, крыши, полы и другие поверхности, чтобы улучшить энергетическую эффективность здания.',
    },
    {
      title: 'Садовая мебель',
      description:
        'Садовая мебель - это мебель, предназначенная для использования на открытых пространствах, таких как сады, террасы, балконы и дворы. Она включает в себя стулья, столы, шезлонги, гамаки и другие предметы, которые обеспечивают комфортное место отдыха на свежем воздухе. Садовая мебель может быть изготовлена из различных материалов, таких как дерево, металл, пластик или ротанг.',
    },
    {
      title: 'Декоративные элементы',
      description:
        'Декоративные элементы - это предметы, используемые для добавления стиля и украшения в интерьере или экстерьере здания. Они включают в себя различные элементы декора, такие как картинки, зеркала, вазы, подсвечники, настенные панели и другие аксессуары. Декоративные элементы помогают создать атмосферу и придать индивидуальность помещению.',
    },
    {
      title: 'Системы отопления',
      description:
        'Системы отопления - это системы, используемые для обеспечения тепла в зданиях. Они включают в себя различные методы и устройства, такие как котлы, радиаторы, теплые полы и тепловые насосы. Системы отопления поддерживают комфортную температуру в помещении в холодное время года. Они могут использовать различные источники энергии, включая газ, электричество, солнечную энергию и другие.',
    },
    {
      title: 'Электроинструменты',
      description:
        'Электроинструменты - это инструменты, работающие от электрической энергии, используемые для выполнения различных задач в строительстве и ремонте. Они включают в себя такие инструменты, как дрели, шлифовальные машины, пилы, отбойные молотки и другие. Электроинструменты облегчают и ускоряют выполнение работ, а также повышают точность и качество результатов.',
    },
    {
      title: 'Садовый инвентарь',
      description:
        'Садовый инвентарь - это набор инструментов и приспособлений, используемых для работы в саду и на приусадебном участке. Он включает в себя такие предметы, как лопаты, грабли, секаторы, садовые ножницы, поливочные канистры и другие. Садовый инвентарь помогает облегчить уход за растениями, поддерживать порядок и создавать красивый и ухоженный сад.',
    },
    {
      title: 'Краски и покрытия',
      description:
        'Краски и покрытия - это материалы, используемые для окрашивания и защиты поверхностей. Они включают в себя различные типы красок, лаков, эмалей и других покрытий. Краски и покрытия используются для окрашивания стен, потолков, дверей, мебели и других поверхностей. Они не только придают эстетический вид, но и защищают от воздействия влаги, солнца, коррозии и других внешних факторов.',
    },
    {
      title: 'Сантехнические изделия',
      description:
        'Сантехнические изделия - это изделия, используемые в системах водоснабжения и канализации. Они включают в себя смесители, сифоны, трубы, фитинги, унитазы, раковины, ванны и другие компоненты. Сантехнические изделия обеспечивают комфорт и гигиенические условия в ванной комнате, кухне и других помещениях с водоснабжением.',
    },
    {
      title: 'Электрические аксессуары',
      description:
        'Электрические аксессуары - это компоненты и принадлежности, используемые в электрических системах. Они включают в себя розетки, выключатели, электрические провода, удлинители, светильники и другие изделия. Электрические аксессуары необходимы для обеспечения электропитания и безопасной работы электроустройств в зданиях.',
    },
    {
      title: 'Инструменты для ремонта',
      description:
        'Инструменты для ремонта - это набор инструментов, используемых для проведения различных ремонтных работ. Они включают в себя такие инструменты, как молотки, отвертки, ключи, пилы, ножовки, шлифовальные инструменты и другие. Инструменты для ремонта позволяют выполнять задачи по ремонту и обслуживанию различных элементов и систем в доме или офисе.',
    },
  ],
}

const documentationDataSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    update2InfoData: (state: InfoState, action: PayloadAction<Info>) => {},
  },
})

export const { update2InfoData } = documentationDataSlice.actions

export default documentationDataSlice.reducer
