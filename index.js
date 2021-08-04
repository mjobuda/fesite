// CodeMirror
var editor = CodeMirror(document.getElementById('new-editor'), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    lineWrapping: true,
  indentUnit: 4,
  lineWrapping: true,
  value: `# The 'contract' keyword defines a new contract type
contract GuestBook:
    # Strings are generic over a constant number
    # that restricts its maximum size
    messages: Map<address, String<100>>

    # Events can be defined on contract or module level
    event Signed:
        book_msg: String<100>

    pub def sign(book_msg: String<100>):
        # All storage access is explicit using 'self.<some-key>'
        self.messages[msg.sender] = book_msg

        # Emit the 'Signed' event
        emit Signed(book_msg=book_msg)

    pub def get_msg(addr: address) -> String<100>:
        # Copying data from storage to memory
        # has to be done explicitly via 'to_mem()'
        return self.messages[addr].to_mem()`,
  mode:  "ruby"
});
editor.setSize(null,450);
// var code_mirror = document.querySelector('.CodeMirror');
editor.style.fontFamily = 'victor-mono, monospace';

