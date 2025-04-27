// // Добавь глобальный объект, если его ещё нет
// window.CKEditors = {};
//
// export function ckEditorInits(selector = '.ckeditor5') {
//   const ckeditorEls = document.querySelectorAll(selector);
//   ckeditorEls.forEach((item) => {
//     const id = item.getAttribute('id');
//     if (!id) return;
//
//     ClassicEditor.create(item, {
//       cloudServices: {
//         tokenUrl: 'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt',
//         uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
//       },
//     })
//       .then((editor) => {
//         if (item.hasAttribute('disabled')) {
//           editor.isReadOnly = true;
//         }
//
//         editor.model.document.on('change:data', () => {
//           editor.updateSourceElement();
//         });
//
//         window.CKEditors[id] = editor;
//       })
//       .catch((error) => {
//         console.error('Ошибка при инициализации CKEditor:', error);
//       });
//   });
// }
//
