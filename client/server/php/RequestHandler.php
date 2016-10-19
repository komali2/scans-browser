$path    = '/tmp';
$files = scandir($path);

$files = array_diff(scandir($path), array('.', '..'));
//we may not need this stuff