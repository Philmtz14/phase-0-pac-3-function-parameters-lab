function introduction(name) {
  switch (name) {
      case name = "Aki":
          return "Hi, my name is Aki.";
      case name = "Samip":
          return "Hi, my name is Samip.";
  }
}
function introductionWithLanguage(name, language) {
    switch (name, language) {
        case name, language = "Aki", "Ember.js":
            return "Hi, my name is Aki and I am learning to program in Ember.js.";
        case name, language = "Samip", "React":
            return "Hi, my name is Samip and I am learning to program in React.";
    }
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return 'Hi, my name is Gracie and I am learning to program in ' + language + '.';
    return 'Hi, my name is Gracie and I am learning to program in Python.';
}