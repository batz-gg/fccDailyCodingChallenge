function sort(emails) {
  let sortedEmails = [];
  const mailProps = emails.map(email => {
    const parts = email.split('@');
    const username = parts[0];
    const domain = parts[1];
    return {
      original: email,
      username: username.toLowerCase(),
      domain: domain.toLowerCase()
    };
  });
  mailProps.sort((a, b) => {
    if (a.domain < b.domain) {
      return -1;
    }
    if (a.domain > b.domain) {
      return 1;
    }
    
    if (a.username < b.username) {
      return -1;
    }
    if (a.username > b.username) {
      return 1;
    }
    
    return 0;
  });
  sortedEmails = mailProps.map(item => item.original);
  return sortedEmails;
}

console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));

/*
function sortEmails(emails) {
  // 1. Array-ийн функцүүдийг гинжин хэлхээгээр холбох
  return emails
    .map(email => {
      // И-мэйл хаягийг задалж, эрэмбэлэлтэд ашиглах объект болгох
      const [username, domain] = email.split('@');
      return {
        original: email,
        username: username.toLowerCase(),
        domain: domain.toLowerCase()
      };
    })
    .sort((a, b) => {
      // 2. Домайн-аар эрэмбэлэх
      if (a.domain !== b.domain) {
        return a.domain.localeCompare(b.domain); // String-ийг харьцуулах JS-ийн арга
      }
      
      // 3. Домайн тэнцүү бол Username-ээр эрэмбэлэх
      return a.username.localeCompare(b.username);
    })
    .map(item => item.original); // 4. Зөвхөн анхны хаягийг буцаах
}

console.log(sortEmails(["jill@mail.com", "john@example.com", "jane@example.com"]));
// Үр дүн: [ 'jane@example.com', 'john@example.com', 'jill@mail.com' ]
*/