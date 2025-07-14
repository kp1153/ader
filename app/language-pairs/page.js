export default function LanguagePairsPage() {
  return (
    <main className="bg-white text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">Language Translation Pairs</h1>

        {/* English <> Other */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">English &lt;&gt; Other Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 text-sm">
            {[
              "Abkhazian", "Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Aramaic",
              "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Balochi", "Bambara",
              "Bashkir", "Basque", "Belarusian", "Bemba", "Bengali", "Bhojpuri", "Bihari", "Bislama", "Bodo",
              "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan", "Cebuano", "Chamorro", "Chechen",
              "Chinese", "Church Slavic", "Chuvash", "Comorian", "Cornish", "Corsican", "Creole", "Croatian",
              "Czech", "Danish", "Dari", "Dogri", "Dutch", "Dzongkha", "Esperanto", "Estonian", "Ewe", "Fanti",
              "Fijian", "Finnish", "Flemish", "French", "Fulah", "Galician", "Georgian", "German", "Greek",
              "Gujarati", "Haitian", "Hausa", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo",
              "Ilocano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kalaallisut", "Kannada",
              "Kashmiri", "Kazakh", "Khasi", "Khmer", "Kikuyu", "Kinyarwanda", "Kirghiz", "Konkani", "Korean",
              "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lingala", "Lithuanian", "Macedonian", "Maithili",
              "Malagasy", "Malay", "Malayalam", "Maltese", "Maninka", "Manipuri", "Manx", "Maori", "Marathi",
              "Marshallese", "Moldavian", "Mongolian", "Montenegrin", "Moore", "Nauru", "Navajo", "Ndonga",
              "Nepali", "North Ndebele", "Northern Sami", "Norwegian", "Nuer", "Nyanja", "Occitan", "Ojibwa",
              "Oriya", "Oromo", "Ossetic", "Pali", "Papiamentu", "Pangasinan", "Push", "Persian", "Polish",
              "Portuguese", "Punjabi", "Quechua", "Rhae", "Romanian", "Rundi", "Russian", "Samoan", "Sango",
              "Sanskrit", "Santhali", "Sardinian", "Scottish", "Sepedi", "Serbian", "Serbo", "Shona",
              "Sichuan Yi", "Sindhi", "Sinhalese", "Slovakian", "Slovene", "Somali", "Spanish", "Sundanese",
              "Swahili", "Swati", "Swedish", "Sylheti", "Tagalog", "Tahitian", "Taiwanese", "Tajik", "Tamil",
              "Tatar", "Telugu", "Tetum", "Thai", "Tibetan", "Tigrinya", "Tlapaneco", "Tonga", "Tsonga",
              "Tswana", "Turkish", "Tumbuka", "Turkmen", "Tuvinian", "Twi", "Uyghur", "Ukrainian", "Urdu",
              "Uzbek", "Venda", "Vietnamese", "Volapuk", "Walloon", "Welsh", "Wolof", "Xhosa", "Yiddish",
              "Yoruba", "Zhuang", "Zulu"
            ].map((lang, index) => (
              <span key={index}>English &lt;&gt; {lang}</span>
            ))}
          </div>
        </section>

        {/* Rare Languages */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rare Language Pairs</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {[
              "Amharic", "Oromo", "Tigrinya", "Nuer", "Swahili", "Iu Mien", "Kirundi", "Kinyarwanda",
              "Luganda", "Kikuyu", "Somali", "Yiddish", "Navajo", "Hakha Chin", "Kanuri", "Dinka", "Zulu"
            ].map((lang, index) => (
              <li key={index}>English &lt;&gt; {lang}</li>
            ))}
          </ul>
        </section>

        {/* Native-to-Native */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Native to Native Language Pairs</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {[
              "Arabic <> French", "French <> Arabic", "French <> Italian", "Canadian <> French",
              "Chinese Mandarin <> Japanese", "Chinese Mandarin <> Chinese Traditional",
              "Danish <> Swedish", "Danish <> Norwegian", "Spanish <> French", "French <> German",
              "German <> Russian", "Russian <> Ukrainian", "Russian <> Uzbek", "Hebrew <> Russian",
              "Turkish <> Russian", "Uzbek <> French", "Portuguese <> Italian", "Greek <> Albanian",
              "Serbian <> Macedonian", "Korean <> German", "Polish <> German", "Romanian <> French",
              "Japanese <> Arabic", "Ukrainian <> German", "Vietnamese <> Russian", "French <> Korean",
              "Portuguese <> Spanish", "Romanian <> Italian", "Japanese <> Spanish"
            ].map((pair, index) => (
              <li key={index}>{pair}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
